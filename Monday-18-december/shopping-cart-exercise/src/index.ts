const productButtons: NodeList = document.querySelectorAll(".addButton");
const removeButtons: NodeList = document.querySelectorAll(".removeButton")
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");
const productsInCart: HTMLElement | null = document.getElementById('productsInCart')

function updateCart(product): void {
  if (shoppingCart.includes(product)) {
    alert("Product is already in your cart!")
  }
  else {
    shoppingCart.push(product)
    productsInCart.innerHTML = String(shoppingCart.length)
  }
}

function removeFromCart(product): void {
  if (shoppingCart.includes(product)) {
    const index = shoppingCart.indexOf(product)
    if (index !== -1) {
      shoppingCart.splice(index, 1)
    }
  }
  productsInCart.innerHTML = String(shoppingCart.length)
}

function addClickEvent(): void {
  productButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const target = event.currentTarget as HTMLElement
      const article = target.closest('.card') as HTMLElement | null

      if (article) {
        const product = article.getAttribute('data-product')
        if (product) {
          updateCart(product)
        }
      }
    })
  })
}

function addRemoveEvent(): void {
  removeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const target = event.currentTarget as HTMLElement
      const article = target.closest('.card') as HTMLElement | null

      if (article) {
        const product = article.getAttribute('data-product')
        if(product) {
          removeFromCart(product)
        }
      }
    })
  })
}

function listProductsInCart(): void {
  openCartButton.addEventListener("click", function(event) {
    alert(shoppingCart)
  })
}

addClickEvent();
addRemoveEvent();
listProductsInCart();