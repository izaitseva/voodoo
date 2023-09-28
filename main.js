const URL = "https://voodoo-sandbox.myshopify.com/products.json?limit=24";

export async function fetchProducts() {
  const cardPromise = await fetch(URL);
  const result = await cardPromise.json();

  console.log(result);

  const cardList = document.getElementById("card-list");

  result.products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("card-item");
    console.log(product);
    li.innerHTML = `
            <div class="info-container">
            <p class="info-text">used</p>
            </div>
            <img class="card-img" src="/images/no-image.png" alt="#"/>
            <div class="card-desc-container">
            <div class="card-prod-desc">
              <p class="product-name">${product.title}</p>
              <p class="product-name">${product.variants[0].price}</p>
            </div>
            <div class="card-condition-desc">
              <p class="product-condition">Condition</p>
              <p class="product-used">Slightly used</p>
            </div>
          </div>
          <button class="add-to-card-btn">Add to card</button>
    `;
    cardList.appendChild(li);
  });
}

fetchProducts();
