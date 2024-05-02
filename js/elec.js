// Function to handle adding an item to the cart
function addToCart(event) {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to add to cart?");

    // If the user confirms, update the button text and disable it
    if (confirmation) {
        alert("Item added to cart!");
        event.target.innerText = "Added";
        event.target.disabled = true;
    } else {
        // If the user cancels, do nothing
        // Optionally, you can add some other action here if needed
    }
}
