// Admin credentials
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Check if admin is logged in
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');

    if (isLoggedIn === 'true') {
        loginContainer.style.display = 'none';
        dashboardContainer.style.display = 'flex';
        loadDashboardMetrics();
        listenToProducts(); // Start real-time sync
    } else {
        loginContainer.style.display = 'flex';
        dashboardContainer.style.display = 'none';
    }
}

// Listen to products from Firebase in real-time
function listenToProducts() {
    db.ref('products/').on('value', (snapshot) => {
        const data = snapshot.val();
        const productsArray = [];
        for (let id in data) {
            productsArray.push({ id, ...data[id] });
        }
        renderProductsTable(productsArray);
        updateDashboardCounts(productsArray);
    });
}

// Save Product to Firebase
function saveProduct() {
    const productId = document.getElementById('product-id').value;
    const productData = {
        name: document.getElementById('product-name').value,
        description: document.getElementById('product-description').value,
        price: parseFloat(document.getElementById('product-price').value),
        stock: parseInt(document.getElementById('product-stock').value),
        category: document.getElementById('product-category').value,
        image: document.getElementById('product-image').value,
        available: true,
        rating: 5.0,
        reviews: []
    };

    if (productId) {
        // Update existing product using its Firebase ID
        db.ref('products/' + productId).update(productData)
            .then(() => alert("Product Updated Live!"));
    } else {
        // Add new product to the list
        db.ref('products/').push(productData)
            .then(() => alert("New Product Added Live!"));
    }

    bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
}

// Delete Product from Firebase
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        db.ref('products/' + id).remove()
            .then(() => alert("Product Removed"));
    }
}

// Function to render the table (called automatically by the listener)
function renderProductsTable(products) {
    const tableBody = document.getElementById('products-table-body');
    if(!tableBody) return;
    tableBody.innerHTML = '';
    products.forEach((product) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.category || 'N/A'}</td>
            <td>
                <button onclick="editProduct('${product.id}')" class="btn btn-primary btn-sm">Edit</button>
                <button onclick="deleteProduct('${product.id}')" class="btn btn-danger btn-sm">Delete</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}