import { fetchProducts } from "./js/api.js";
import { addToCart, getCart } from "./js/cart.js";

function initAddToCartButtons() {
  let buttons = document.querySelectorAll(".add-to-cart-btn");

  for (const btn of buttons) {
    btn.addEventListener("click", (event) => {
      const target = event.target;
      const parentLi = target.closest("li");
      const product = parentLi.product;
      const cartItem = addToCart(product);
      const itemId = `cart_${product.id}`;
      console.log(cartItem);

      if (cartItem.amount > 1) {
        const existLi = document.getElementById(itemId);
        const amountEl = existLi.querySelector(".product-amount");
        amountEl.innerHTML = cartItem.amount;
        return;
      }

      const addedToCart = document.getElementById("side-cart");
      const li = document.createElement("li");
      li.classList.add("side-cart__item");
      li.id = itemId;

      const Image =
        product.images.length > 0
          ? product.images[0].src
          : "/images/no-image.png";

      li.innerHTML = `
      <div class="card-product-container">
        <img class="side-cart__img" src="${Image}" alt="img" />
        <div class="cart-info">
          <h2 class="product-name">${product.title}</h2>
          <p class="product-price">${product.variants[0].price}</p>
          <div class="product-add-remove-container">
            <button>+</button>
            <p class="product-amount">1</p>
            <button>-</button>
          </div>
        </div>
      </div>
      <button class="remove-product-btn">
        <img src="/images/trash-bin.svg" alt="img" />
      </button>
      `;
      addedToCart.appendChild(li);
    });
  }
}

function renderCart() {
  const cartItems = getCart();
  const cartList = document.getElementById("side-cart");

  cartItems.forEach((cartItem) => {
    const li = document.createElement("li");
    li.classList.add("side-cart__item");

    console.log(cartItem);
    const Image =
      cartItem.product.images.length > 0
        ? cartItem.product.images[0].src
        : "/images/no-image.png";

    li.innerHTML = `
    <div class="card-product-container">
      <img class="side-cart__img" src="${Image}" alt="img" />
      <div class="cart-info">
        <h2 class="product-name">${cartItem.product.title}</h2>
        <p class="product-price">${cartItem.product.variants[0].price}</p>
        <div class="product-add-remove-container">
          <button>+</button>
          <p>${cartItem.amount}</p>
          <button>-</button>
        </div>
      </div>
    </div>
    <button class="remove-product-btn">
      <img src="/images/trash-bin.svg" alt="img" />
    </button>
  `;
    cartList.appendChild(li);
  });
}

async function renderProducts() {
  const { products } = await fetchProducts();

  const productList = document.getElementById("cart-list");

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.product = product;

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
    productList.appendChild(li);
  });

  initAddToCartButtons();
}

function toggleSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function initCartBtn() {
  document.getElementById("cartBtn").addEventListener("click", () => {
    toggleSideBar();
  });

  document.getElementById("close-sidebar").addEventListener("click", () => {
    toggleSideBar();
  });
}

initCartBtn();
renderCart();
renderProducts();
