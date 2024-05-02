// Sample product data
const products = [
    { id: 1, name: "Minecraft: Java and Bedrock Edition", category: "Games", price: 29.99, image: "Minecraft" },
    { id: 2, name: "Roblox", category: "Games", price: 0.00, image: "Roblox" },
    { id: 3, name: "Grand Theft Auto V", category: "Games", price: 29.99, image: "gta5" },
    { id: 4, name: "call of duty modern warfare 2", category: "Games", price: 69.99, image: "call of duty modern warfare 2" },
    { id: 5, name: "Cyberpunk 2077", category: "Games", price: 59.99, image: "Cyberpunk 2077" },
    { id: 6, name: "Assassin's Creed Mirage", category: "Games", price: 49.99, image: "Assassin's Creed Mirage" },
    { id: 7, name: "Alien: Isolation", category: "Games", price: 49.99, image: "Alien Isolation" },
    { id: 8, name: "Red Dead Redemption 2", category: "Games", price: 59.99, image: "Red Dead Redemption 2" },
    { id: 9, name: "HITMAN World of Assassination", category: "Games", price: 32.59, image: "HITMAN World of Assassination" },
    { id: 10, name: "Fallout 4", category: "Games", price: 12.99, image: "Fallout 4" },
    { id: 11, name: "Alan Wake 2", category: "Games", price: 45.49, image: "Alan Wake 2" },
    { id: 12, name: "EA SPORTS FC™ 24 Standard Edition", category: "Games", price: 69.99, image: "EA SPORTS FC™ 24 Standard Edition" },
    { id: 13, name: "Need for Speed Heat", category: "Games", price: 39.99, image: "Need for Speed Heat" }

    // Add more products as needed
];

// Sample shopping cart data
let shoppingCart = [];

function displayProducts(products, container) {
    container.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Set background color based on product category
        switch (product.category) {
            case "Fruits & Vegetables":
                productCard.style.backgroundColor = "#f7f2da"; // Example background color for fruits & vegetables
                break;
            case "Dairy Products":
                productCard.style.backgroundColor = "#b0c414"; // Example background color for dairy products
                break;
            case "Fashion":
                productCard.style.backgroundColor = "#c718c4"; // Example background color for fashion items
                break;
            case "Sports Products":
                productCard.style.backgroundColor = "#8e79b3"; // Example background color for sports products
                break;
            case "Electronics":
                productCard.style.backgroundColor = "#aaaaaa"; // Example background color for electronics
                break;
            case "Games":
                productCard.style.backgroundColor = "#130B38"; // Example background color for games
                break;
            default:
                productCard.style.backgroundColor = "#ffffff"; // Default background color
        }

        // Apply other styles to product card
        productCard.style.border = "1px solid black";
        productCard.style.width = "375px";
        productCard.style.height = "auto"; // Set height to auto to accommodate varying content heights
        productCard.style.margin = "10px";
        productCard.style.padding = "10px";
        productCard.style.boxSizing = "border-box"; // Include padding and border in the element's total width and height

        const productImage = document.createElement("img");
        productImage.style.width = "100%";
        productImage.style.height = "auto"; // Set height to auto to maintain aspect ratio

        // Check if image with jpg extension exists
        const jpgImage = new Image();
        jpgImage.onload = function () {
            productImage.src = `images2/${product.image}.jpg`;
        };
        jpgImage.onerror = function () {
            // If jpg image doesn't exist, check if image with jpeg extension exists
            const jpegImage = new Image();
            jpegImage.onload = function () {
                productImage.src = `images2/${product.image}.jpeg`;
            };
            jpegImage.onerror = function () {
                console.error(`Image not found for product: ${product.name}`);
            };
            jpegImage.src = `images2/${product.image}.jpeg`;
        };
        jpgImage.src = `images2/${product.image}.jpg`;

        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.classList.add("add-to-cart-btn");
        addToCartButton.dataset.id = product.id;

        // Append elements to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);

        container.appendChild(productCard);
    });
}








// Function to update the cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";
    shoppingCart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;

        // Add a button to remove the item from the cart
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-from-cart-btn");
        removeButton.dataset.id = item.id;
        removeButton.addEventListener('click', () => {
            removeFromCart(item.id);
        });
        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);
    });
}

// Function to handle adding a product to the shopping cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        shoppingCart.push(product);
        updateCartUI();
        console.log("Product added to cart:", product);
    } else {
        console.error("Product not found");
    }
}

// Function to handle removing a product from the shopping cart
function removeFromCart(productId) {
    const index = shoppingCart.findIndex(item => item.id === productId);
    if (index !== -1) {
        shoppingCart.splice(index, 1); // Remove the item from the shopping cart array
        updateCartUI(); // Update the cart UI to reflect the changes
        console.log("Product removed from cart:", productId);
    } else {
        console.error("Product not found in cart");
    }
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.dataset.id);
        addToCart(productId);
    });
});

// Display featured products
const featuredProductsContainer = document.querySelector(".product-listings");
displayProducts(products, featuredProductsContainer);

// Display categories
const categoryListContainer = document.querySelector(".category-list");
const categories = Array.from(new Set(products.map(product => product.category)));
categories.forEach(category => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#">${category}</a>`;
    categoryListContainer.appendChild(listItem);
});