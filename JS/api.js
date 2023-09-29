const URL = "https://voodoo-sandbox.myshopify.com/products.json?limit=24";

async function fetchProducts() {
  const cartPromise = await fetch(URL);
  const result = await cartPromise.json();

  return result;
}

export { fetchProducts };
