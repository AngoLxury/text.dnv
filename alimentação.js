const products = [
    {
        id: 1,
        name: 'Fresh Oranges',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e',
        category: 'Citrus'
    },
    {
        id: 2,
        name: 'Red Apples',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
        category: 'Core'
    },
    {
        id: 3,
        name: 'Bananas',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
        category: 'Tropical'
    },
    {
        id: 4,
        name: 'Fresh Berries',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1466065478348-0b967011f8e0',
        category: 'Berries'
    },
    {
        id: 5,
        name: 'batata',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1466065478348-0b967011f8e0',
        category: 'terra'
    }
];


let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            removeFromCart(productId);
        }
    }
    updateCartUI();
}

function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartFooter = document.getElementById('cartFooter');

    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="close-btn" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
    }

    // Update total
    cartTotal.textContent = `$${getTotalPrice().toFixed(2)}`;
}

function checkout() {
    const total = getTotalPrice();
    const deliveryFee = 5.00;
  
    
    const message = `*Seu carrinho está feito (Alimentos)*\n\n${cart
        .map(item => `*${item.name}*\nQuantidade: ${item.quantity}\nPreço: $${(item.price * item.quantity).toFixed(2)}\n`)
        .join('\n')}
\n*Subtotal: $${total.toFixed(2)}*
*Taxa de entrega: $${deliveryFee.toFixed(2)}*
*Total: $${(total + deliveryFee).toFixed(2)}*

Aguarde a confirmação de entrega.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+244940528007?text=${encodedMessage}`, '_blank');
}

// Initialize products grid
function initializeProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Cart panel toggle
function toggleCart() {
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    updateCartUI();
});