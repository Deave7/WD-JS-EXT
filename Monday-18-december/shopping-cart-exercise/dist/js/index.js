const productButtons = document.querySelectorAll(".addButton");
const removeButtons = document.querySelectorAll(".removeButton");
const shoppingCart = [];
const cart = document.querySelector("#cart");
const openCartButton = document.querySelector("#open-cart");
const productsInCart = document.getElementById('productsInCart');
function updateCart(product) {
    if (shoppingCart.includes(product)) {
        alert("Product is already in your cart!");
    }
    else {
        shoppingCart.push(product);
        productsInCart.innerHTML = String(shoppingCart.length);
    }
}
function removeFromCart(product) {
    if (shoppingCart.includes(product)) {
        const index = shoppingCart.indexOf(product);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
        }
    }
    productsInCart.innerHTML = String(shoppingCart.length);
}
function addClickEvent() {
    productButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const target = event.currentTarget;
            const article = target.closest('.card');
            if (article) {
                const product = article.getAttribute('data-product');
                if (product) {
                    updateCart(product);
                }
            }
        });
    });
}
function addRemoveEvent() {
    removeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const target = event.currentTarget;
            const article = target.closest('.card');
            if (article) {
                const product = article.getAttribute('data-product');
                if (product) {
                    removeFromCart(product);
                }
            }
        });
    });
}
function listProductsInCart() {
    openCartButton.addEventListener("click", function (event) {
        alert(shoppingCart);
    });
}
addClickEvent();
addRemoveEvent();
listProductsInCart();
