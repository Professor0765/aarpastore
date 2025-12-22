// Global State
let products = []; 

// Initialize Live Data Listener
function initLiveProducts() {
    // Show loading state if needed
    db.ref('products/').on('value', (snapshot) => {
        const data = snapshot.val();
        products = [];
        
        // Convert Firebase object to Array for your existing render logic
        for (let id in data) {
            products.push({ id, ...data[id] });
        }
        
        console.log("Live Products Sync:", products);
        
        // Refresh the current view with live data
        if (currentPage === 'home') {
            renderHome();
        } else if (currentPage === 'search') {
            renderSearch();
        }
    });
}

// Call this once when the app starts
initLiveProducts();

// Update your toggleWishlist or addToCart to use product.id
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        showToast(`${product.name} added to cart!`);
        renderApp();
    }
}