let cartItem = [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Toggle the sidebar visibility
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Add product to cart
function addToCart(name, price) {
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity =+ 1;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    updateCartUI();
}

// Remove item from cart
function removeFromCart(name) {
    cartItems = cartItems.filter(item => item.name !== name);
    updateCartUI();
}

// Update cart Interface
function updateCartUI() {
    cartList.innerHTML = '';
    let total = 0;
    let count = 0;

    cartItems.forEach(item => {
        total =+ item.price * item.quantity;
        count =+ item.quantity;

        const li = document.createElement('li');
        li.innerHTML = ` <div>
                            ${item.name} x ${item.quantity}<br>
                            <small>UGX ${item.price  * item.quantity}</small>
                         </div>
                        <button onClick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = count;
}
