function openProductPopup(productId) {
    var productDescription;
    var productName;

    // Set product name and description based on the product ID
    switch (productId) {
        case "product1":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product2":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product3":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product4":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product5":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product6":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product7":
            productName = productId;
            productDescription ="404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product8":
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product9":
            productName = productId;
            productDescription ="404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        case "product10":
            productName =productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true);
            break;
        // Add cases for more products as needed
        default:
            productName = "I am Nithya ";
            productDescription = "Be carefull 😂😂";
            showAddToCartButton(false); // Hide the button
            break;
    }


    // Display the popup
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    var popupProductName = document.getElementById("popup-product-name");
    var popupProductDescription = document.getElementById("popup-product-description");

    popupProductName.textContent = productName;
    popupProductDescription.textContent = productDescription;
    popup.style.display = "block";
}

function closeProductPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
function addToCart() {
    var productName = document.getElementById("popup-product-name").textContent;
    // You can implement your add to cart functionality here
    alert("Added to cart: " + productName);
    closeProductPopup();
}
function showAddToCartButton(show) {
    var addToCartBtn = document.getElementById("add-to-cart-btn");
    if (show) {
        addToCartBtn.style.display = "block";
    } else {
        addToCartBtn.style.display = "none";
    }
}

function showProducts(category) {
    // Hide all product boxes
    var productBoxes = document.querySelectorAll('.product-boxes');
    productBoxes.forEach(function(box) {
        box.style.display = 'none';
    });
    
    // Show product boxes for the selected category
    var selectedProductBox = document.getElementById('product-' + category);
    if (selectedProductBox) {
        selectedProductBox.style.display = 'block';
    }
}

function Virus() {
    alert("Virus files Started to Install in your device 💀💀");
}