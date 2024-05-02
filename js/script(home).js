// Sample product data
const products = [
    { id: 1, name: "Apple", category: "Fruits & Vegetables", price: 3.99, image: "different-types-of-apples-jpg" },
    { id: 2, name: "i phone 15 pro max", category: "Electronics", price: 2999, image: "i phone 15" },
    { id: 3, name: "Hat", category: "Fashion", price: 12.99, image: "Hat" },
    { id: 4, name: "Call of duty", category: "Games", price: 9.99, image: "Call of duty" },
    { id: 5, name: "Baseball bat", category: "Sports Products", price: 17.65, image: "Baseball bat" },
    { id: 6, name: "Amul cheese", category: "Dairy Products", price: 5.2, image: "Amul cheese" },
    { id: 7, name: "banana", category: "Fruits & Vegetables", price: 2.49, image: "banana" },
    { id: 8, name: "orange", category: "Fruits & Vegetables", price: 3.53, image: "orange" },
    { id: 9, name: "Baseball helmet", category: "Sports Products", price: 19.99, image: "Baseball helmet" },
    { id: 10, name: "Ball", category: "Sports Products", price: 34, image: "football ball" },
    { id: 11, name: "Football-Tshirt", category: "Sports Products", price: 150, image: "football-shirt" },
    { id: 12, name: "Dell latitude 5440", category: "Electronics", price: 3000, image: "Dell latitude 5440" },
    { id: 13, name: "Dell G16", category: "Electronics", price: 5999, image: "Dell g16" },
    { id: 14, name: "Galaxy S24 Ultra", category: "Electronics", price: 3500, image: "Galaxy S24 Ultra" },
    { id: 15, name: "Omega", category: "Fashion", price: 20000, image: "Omega" },
    { id: 16, name: "Rolex 2017 edition ", category: "Fashion", price: 3000, image: "Rolex 1" },
    { id: 17, name: "Rolex 2020 edition", category: "Fashion", price: 4000, image: "Rolex 2" },
    { id: 18, name: "Need for speed heat", category: "Games", price: 50, image: "Need-for-speed heat" },
    { id: 19, name: "Cyberpunk", category: "Games", price: 70, image: "Cyberpunk" },
    { id: 20, name: "Battlefiled", category: "Games", price: 44, image: "Battlefiled" },
    { id: 21, name: "masterella mozarila", category: "Dairy Products", price: 6.87, image: "masterella mozarila" },
    { id: 22, name: "kraft mozarila", category: "Dairy Products", price: 7.24, image: "kraft mozarila" },
    { id: 23, name: "Domty mozarila", category: "Dairy Products", price: 4.65, image: "cheese 1" },
    { id: 24, name: "cuncumber", category: "Fruits & Vegetables", price: 1.99, image: "concomber" },

    // Add more products as needed
];

// Sample shopping cart data
let shoppingCart = [];


function displayProducts(products, container) {
    container.innerHTML = "";
    let categoryContainers = {}; // Object to store category containers
    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.style.display = "inline-block"; // Set display to inline-block
        productCard.style.width = "200px"; // Set width for the product card
        productCard.style.border = "1px solid black";
        productCard.style.width = "250px"; // Set fixed width for the product card
        productCard.style.height = "350px"; // Set fixed height for the product card
        productCard.style.margin = "10px 35px";
        productCard.style.padding = "10px";
        productCard.style.boxSizing = "border-box";

        // Set background color based on product category
        switch (product.category) {
            case "Fruits & Vegetables":
                productCard.style.backgroundColor = "#fccf79";
                break;
            case "Dairy Products":
                productCard.style.backgroundColor = "#ebfc79";
                break;
            case "Fashion":
                productCard.style.backgroundColor = "#d3fc79";
                break;
            case "Sports Products":
                productCard.style.backgroundColor = "#b8fc79";
                break;
            case "Electronics":
                productCard.style.backgroundColor = "#9cfc79";
                break;
            case "Games":
                productCard.style.backgroundColor = "#79fc8d";
                break;
            default:
                productCard.style.backgroundColor = "#ffffff";
        }

        // Apply other styles to product card


        // Create elements for product details
        const productImage = document.createElement("img");

        // Check if image with jpg extension exists
        const jpgImage = new Image();
        jpgImage.onload = function () {
            productImage.src = `images/${product.image}.jpg`; // Load jpg image
        };
        jpgImage.onerror = function () {
            // If jpg image doesn't exist, try loading image with jpeg extension
            const jpegImage = new Image();
            jpegImage.onload = function () {
                productImage.src = `images/${product.image}.jpeg`; // Load jpeg image
            };
            jpegImage.onerror = function () {
                console.error(`Image not found for product: ${product.name}`);
            };
            jpegImage.src = `images/${product.image}.jpeg`;
        };
        jpgImage.src = `images/${product.image}.jpg`;

        productImage.alt = product.name;
        productImage.style.width = "230px";
        productImage.style.height = "200px";

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productName.classList.add("product-name");
        productName.style.fontSize = "16px"; // Set font size for product name

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productPrice.classList.add("product-price");
        productPrice.style.fontSize = "14px"; // Set font size for product price

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.classList.add("add-to-cart-btn");
        addToCartButton.dataset.id = product.id;

        // Append elements to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);

        // Check if a container for the category exists
        if (!categoryContainers[product.category]) {
            // Create a new container for the category
            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("category-container");
            categoryContainer.classList.add(product.category.toLowerCase().replace(/\s+/g, '-')); // Add category name as class
            categoryContainers[product.category] = categoryContainer; // Store the container in the object

            // Add category name
            const categoryName = document.createElement("h2");
            categoryName.textContent = product.category;
            categoryName.classList.add("fancy-category-name"); // Add a class for styling
            categoryContainer.appendChild(categoryName);
        }

        // Append product card to the corresponding category container
        categoryContainers[product.category].appendChild(productCard);
    });


    // Append all category containers to the main container
    Object.values(categoryContainers).forEach(categoryContainer => {
        container.appendChild(categoryContainer);
        // Add horizontal line
        const hr = document.createElement("hr");
        hr.classList.add("fancy-line");
        container.appendChild(hr);
    });
}

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







