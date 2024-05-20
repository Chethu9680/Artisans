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
            productName = productId;
            productDescription = "404 NOT FOUND😊😊";
            showAddToCartButton(true); // Hide the button
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

let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCartCount();
    alert(`${productName} added to cart!`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartCount = cartItems.length;
    cartCountElement.textContent = cartCount;
}


function showCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>Cart</h2>';

    // Display cart items
    if (cartItems.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        cartItems.forEach(item => {
            cartContainer.innerHTML += `<div class="cart-item">${item.name} - ${item.price}</div>`;
            total += item.price;
        });
        cartContainer.innerHTML += `<p>Total: $${total}</p>`;
    }

    // Buy Now button
    const buyNowBtn = document.createElement('button');
    buyNowBtn.textContent = 'Buy Now';
    buyNowBtn.classList.add('cart-btn');
    buyNowBtn.addEventListener('click', () => {
        // Add your buy now functionality here
        alert('Redirecting to checkout page...');
    });
    cartContainer.appendChild(buyNowBtn);

    // Clear Cart button
    const clearCartBtn = document.createElement('button');
    clearCartBtn.textContent = 'Clear Cart';
    clearCartBtn.classList.add('cart-btn');
    clearCartBtn.style.backgroundColor = '#dc3545';
    clearCartBtn.addEventListener('click', () => {
        cartItems = []; // Clear cart
        updateCartCount();
        showCart(); // Refresh cart display
        alert('Cart cleared.');
    });
    cartContainer.appendChild(clearCartBtn);

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('cart-close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        cartContainer.style.display = 'none';
    });
    cartContainer.appendChild(closeBtn);

    cartContainer.style.display = 'block';
}




// Add event listener to product popup "Add to Cart" button
const popupAddToCartButton = document.getElementById('add-to-cart-btn');
popupAddToCartButton.addEventListener('click', () => {
    const productName = document.getElementById('popup-product-name').textContent;
    const productPrice = parseFloat(document.getElementById('popup-product-price').textContent.slice(1)); // Remove $ sign and convert to float
    addToCart(productName, productPrice);
});


