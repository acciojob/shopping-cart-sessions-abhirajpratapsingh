// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

// Load products on page load
window.onload = function() {
    displayProducts();
    loadCart();
};

// Display product list
function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(li);
    });
}

// Add product to cart
function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveCart(cart);
    displayCart();
}

// Load cart from session storage
function loadCart() {
    const cart = getCart();
    displayCart(cart);
}

// Get cart from session storage
function getCart() {
    const cart = sessionStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

// Save cart to session storage
function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart items
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear previous cart items

    const cart = getCart();
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Clear cart
document.getElementById("clear-cart-btn").addEventListener("click", function() {
    sessionStorage.removeItem("cart");
    displayCart();
});
