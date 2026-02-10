let total = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById("cartItems");

    // Create list item
    const li = document.createElement("li");
    li.textContent = `${productName} - Rs.${price}`;

    // Add item to cart
    cartItems.appendChild(li);

    // Update total
    total += price;
    document.getElementById("totalPrice").textContent =
        `Total Price: Rs.${total}`;
}
