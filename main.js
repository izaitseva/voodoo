import { fetchProducts } from "./js/api.js";

function initAddToCartButtons() {
  let carts = document.querySelectorAll(".add-to-cart-btn");

  for (const cart of carts) {
    cart.addEventListener("click", () => {
      console.log("add to cart");
    });
  }
}

async function renderProducts() {
  const { products } = await fetchProducts();

  const cartList = document.getElementById("cart-list");

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.setAttribute("data-product-id", product.id);
    console.log(product);

    const Image =
      product.images.length > 0
        ? product.images[0].src
        : "/images/no-image.png";
    li.innerHTML = `
              <div class="info-container">
              <p class="info-text">used</p>
              </div>
              <img class="cart-img" src="${Image}" alt="#"/>
              <div class="cart-desc-container">
              <div class="cart-prod-desc">
                <p class="product-name">${product.title}</p>
                <p class="product-name">${product.variants[0].price}</p>
              </div>
              <div class="cart-condition-desc">
                <p class="product-condition">Condition</p>
                <p class="product-used">Slightly used</p>
              </div>
            </div>
            <button class="add-to-cart-btn">Add to cart</button>
      `;
    cartList.appendChild(li);
  });

  initAddToCartButtons();
}

renderProducts();
