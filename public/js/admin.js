// Admin Panel JavaScript

// Constants
const API_URL = `${window.location.protocol}//${window.location.host}/api`;
const TOKEN_KEY = 'admin_token';

// DOM Elements
const loginForm = document.getElementById('loginForm');
const adminPanel = document.getElementById('adminPanel');
const addProductForm = document.getElementById('addProductForm');
const editProductForm = document.getElementById('editProductForm');
const productsTable = document.getElementById('productsTable');
const imageInput = document.getElementById('productImage');
const editImageInput = document.getElementById('editProductImage');
const imagePreview = document.getElementById('imagePreview');
const editImagePreview = document.getElementById('editImagePreview');
const logoutBtn = document.getElementById('logoutBtn');

// Check Authentication Status
function checkAuth() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        loginForm.style.display = 'none';
        adminPanel.style.display = 'block';
        loadProducts();
    } else {
        loginForm.style.display = 'block';
        adminPanel.style.display = 'none';
    }
}

// Login Handler
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Here you would typically make an API call to verify credentials
        // For demo purposes, using a simple check
        if (username === 'admin' && password === 'admin123') {
            document.querySelector('.login-container').style.display = 'none';
            adminPanel.style.display = 'block';
            loadProducts();
        } else {
            showToast('Invalid credentials', 'error');
        }
    } catch (error) {
        showToast('Login failed', 'error');
    }
});

// Load Products
async function loadProducts() {
    try {
        // Here you would typically fetch products from your API
        const products = [
            { id: 1, name: 'Sample Product 1', price: 99.99, category: 'Sneakers', image: 'path/to/image1.jpg' },
            { id: 2, name: 'Sample Product 2', price: 149.99, category: 'Running', image: 'path/to/image2.jpg' }
        ];
        
        renderProductsTable(products);
    } catch (error) {
        showToast('Failed to load products', 'error');
    }
}

function renderProductsTable(products) {
    const tbody = productsTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" class="product-thumbnail"></td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-sm btn-primary me-2" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Add Product Form Handler
addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addProductForm);
    
    try {
        // Here you would typically make an API call to add the product
        showToast('Product added successfully', 'success');
        $('#addProductModal').modal('hide');
        addProductForm.reset();
        imagePreview.innerHTML = '';
        loadProducts();
    } catch (error) {
        showToast('Failed to add product', 'error');
    }
});

// Edit Product Form Handler
editProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(editProductForm);
    
    try {
        // Here you would typically make an API call to update the product
        showToast('Product updated successfully', 'success');
        $('#editProductModal').modal('hide');
        editProductForm.reset();
        editImagePreview.innerHTML = '';
        loadProducts();
    } catch (error) {
        showToast('Failed to update product', 'error');
    }
});

// Image Preview Handlers
imageInput.addEventListener('change', function(e) {
    handleImagePreview(e, imagePreview);
});

editImageInput.addEventListener('change', function(e) {
    handleImagePreview(e, editImagePreview);
});

function handleImagePreview(event, previewElement) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

// Product Operations
function editProduct(productId) {
    try {
        // Here you would typically fetch the product details from your API
        const product = {
            id: productId,
            name: 'Sample Product',
            price: 99.99,
            category: 'Sneakers',
            description: 'Sample description'
        };
        
        // Populate the edit form
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductDescription').value = product.description;
        
        $('#editProductModal').modal('show');
    } catch (error) {
        showToast('Failed to load product details', 'error');
    }
}

async function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            // Here you would typically make an API call to delete the product
            showToast('Product deleted successfully', 'success');
            loadProducts();
        } catch (error) {
            showToast('Failed to delete product', 'error');
        }
    }
}

// Logout Handler
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(TOKEN_KEY);
    checkAuth();
});

// Utility Functions
function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast show bg-${type === 'error' ? 'danger' : 'success'} text-white`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize tooltips and other Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
}); 