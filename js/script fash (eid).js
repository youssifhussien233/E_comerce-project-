// Sample product data
const products = [
    { id: 1, name: "Air Jordan1 Rebellionaire", category: "Fashion", price: 170, image: "Air Jordan1 Rebellionaire" },
    { id: 2, name: "Off-WhiteScan Arrow cotton hoodie", category: "Fashion", price: 580, image: "Off-White" },
    { id: 3, name: "supreme x north face jacket", category: "Fashion", price: 1738, image: "supreme x north face jacket" },
    { id: 4, name: "ralph lauren polo shirts", category: "Fashion", price: 275, image: "ralph lauren polo shirts" },
    { id: 5, name: "NIKE SPORTSWEAR MEN'S JDI FLEECE PANTS", category: "Fashion", price: 95, image: "NIKE SPORTSWEAR MEN'S JDI FLEECE PANTS" },
    { id: 6, name: "vans old skool", category: "Fashion", price: 70, image: "vans old skool" },
    { id: 7, name: "GRAND CHECK SHELTON SUIT", category: "Fashion", price: 4080, image: "GRAND CHECK SHELTON SUIT" },
    { id: 8, name: "Rolex air king", category: "Fashion", price: 10000, image: "Rolex air king" },
    { id: 9, name: "FF-pattern leather wallet", category: "Fashion", price: 986, image: "FF-pattern leather wallet" },
    { id: 10, name: "STAR WARS™ OFF COURT CLOG", category: "Fashion", price: 74.99, image: "STAR WARS™ OFF COURT CLOG" },
    { id: 11, name: "Armani Two-toned reversible leather belt with one side in palmellato leather", category: "Fashion", price: 145, image: "Armani_Two_toned_reversible_leather_belt_with_one_side_in_palmellato" },
    { id: 12, name: "Montblanc legend spirit eau de toilette 50 ml", category: "Fashion", price: 80, image: "Montblanc legend spirit eau de toilette 50 ml" }

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
                productCard.style.backgroundColor = "#602020"; // Example background color for fashion items
                break;
            case "Sports Products":
                productCard.style.backgroundColor = "#8e79b3"; // Example background color for sports products
                break;
            case "Electronics":
                productCard.style.backgroundColor = "#aaaaaa"; // Example background color for electronics
                break;
            case "Games":
                productCard.style.backgroundColor = "#8aab77"; // Example background color for games
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
const featuredProductsContainer = document.querySelector(".product-listings");
displayProducts(products, featuredProductsContainer);
