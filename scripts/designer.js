/// Add this to your designer.js file at the top with other DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
// Shopping Cart in Ghana Cedis (GHS)
let cart = [];
let wishlist = [];

//lookup functioinality 
// Add this code to your designer.js file, preferably near the top with other event listeners

// Lookbook Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lookbookItems = document.querySelectorAll('.lookbook-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.dataset.filter;
            
            // Filter items
            lookbookItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
// DOM Elements
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemsContainer = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.total-amount');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');

// Initialize Cart (GHS only)
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.amount, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.amount;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">GHS ${item.price.toFixed(2)} × ${item.amount}</p>
                <p class="cart-item-subtotal">GHS ${(item.price * item.amount).toFixed(2)}</p>
                <div class="cart-item-controls">
                    <button class="cart-item-decrease" data-id="${item.id}">−</button>
                    <span class="cart-item-quantity">${item.amount}</span>
                    <button class="cart-item-increase" data-id="${item.id}">+</button>
                    <button class="cart-item-remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update total (GHS)
    totalAmount.textContent = `GHS ${total.toFixed(2)}`;
    
    // Save to localStorage
    localStorage.setItem('ghs_cart', JSON.stringify(cart));
}

// Add to Cart (GHS prices only)
document.addEventListener('click', function(e) {
    // Add to cart button
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const id = button.dataset.id;
        const title = button.dataset.title;
        const price = parseFloat(button.dataset.price); // Already in GHS
        const image = button.dataset.image;
        
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.amount += 1;
        } else {
            cart.push({
                id,
                title,
                price,
                image,
                amount: 1
            });
        }
        
        updateCart();
        showToast(`${title} added to cart - GHS ${price.toFixed(2)}`);
    }
    
    // Quantity controls
    if (e.target.classList.contains('cart-item-increase')) {
        const id = e.target.dataset.id;
        const item = cart.find(item => item.id === id);
        if (item) item.amount += 1;
        updateCart();
    }
    
    if (e.target.classList.contains('cart-item-decrease')) {
        const id = e.target.dataset.id;
        const item = cart.find(item => item.id === id);
        if (item && item.amount > 1) {
            item.amount -= 1;
            updateCart();
        }
    }
    
    // Remove item
    if (e.target.classList.contains('cart-item-remove')) {
        const id = e.target.dataset.id;
        cart = cart.filter(item => item.id !== id);
        updateCart();
        showToast('Item removed from cart');
    }
});

// Cart UI Controls
cartIcon.addEventListener('click', () => cartOverlay.style.display = 'flex');
closeCartBtn.addEventListener('click', () => cartOverlay.style.display = 'none');
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) cartOverlay.style.display = 'none';
});

// Checkout Process (GHS)
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.amount;
        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="checkout-item-img">
            <div class="checkout-item-info">
                <h4>${item.title}</h4>
                <p>GHS ${item.price.toFixed(2)} × ${item.amount} = GHS ${(item.price * item.amount).toFixed(2)}</p>
            </div>
        `;
        checkoutItems.appendChild(itemElement);
    });
    
    checkoutTotal.textContent = `GHS ${total.toFixed(2)}`;
    checkoutModal.style.display = 'flex';
    
    document.querySelector('.close-checkout').addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });
});

// Paystack Payment (GHS only)
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('checkout-email').value;
    const phone = document.getElementById('checkout-phone').value;
    
    if (!email || !phone) {
        showToast('Please fill all fields', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.amount), 0);
    const amountInPesewas = Math.round(total * 100); // Convert GHS to pesewas
    
    const handler = PaystackPop.setup({
        key: 'pk_test_0cc79dc6f5339dbfc301094d58f54b0abedb3895', // Test key
        email: email,
        amount: amountInPesewas,
        currency: 'GHS',
        ref: 'PS_' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
            custom_fields: [
                {
                    display_name: "Phone Number",
                    variable_name: "phone",
                    value: phone
                }
            ]
        },
        callback: function(response) {
            // On successful payment
            showToast(`Payment successful! Reference: ${response.reference}`);
            document.getElementById('checkoutModal').style.display = 'none';
            
            // Clear cart
            cart = [];
            updateCart();
            
            // In a real app, you would send the reference to your server
            console.log('Payment complete:', response);
        },
        onClose: function() {
            showToast('Payment window closed', 'warning');
        }
    });
    
    handler.openIframe();
});

// Helper function for notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Load cart from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('ghs_cart');
    if (savedCart) cart = JSON.parse(savedCart);
    updateCart();
});