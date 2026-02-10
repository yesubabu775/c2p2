// Array to hold cart items
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
  let item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

// Function to remove item from cart
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

// Function to update item quantity
function updateQuantity(name, quantity) {
  let item = cart.find(item => item.name === name);
  if (item) {
    item.quantity = parseInt(quantity);
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      updateCart();
    }
  }
}

// Function to update the cart display
function updateCart() {
  let cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; // Clear existing items

  cart.forEach(item => {
    let li = document.createElement('li');
    // Using backticks for template literals and standard quotes for attributes
    li.innerHTML = `
      ${item.name} - Rs.${item.price} x ${item.quantity}
      <button onclick="removeFromCart('${item.name}')">Remove</button>
      <input type="number" value="${item.quantity}" min="0" 
        onchange="updateQuantity('${item.name}', this.value)">
    `;
    cartItems.appendChild(li);
  });
}
