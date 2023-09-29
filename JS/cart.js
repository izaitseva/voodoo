import { getItem, setItem } from "./localStorage.js";

const LSKey = "productCart";

function getCart() {
  try {
    return getItem(LSKey) || [];
  } catch (error) {
    return [];
  }
}
function addToCart(product) {
  const currentCart = getCart();
  let cartItem = currentCart.find((el) => el.product.id === product.id);

  if (cartItem) {
    cartItem.amount += 1;
  } else {
    currentCart.push({
      amount: 1,
      product,
    });
  }

  setItem(LSKey, currentCart);
}

function removeFromCart() {}

function changeQuantity() {
    
}

export { addToCart, removeFromCart, changeQuantity, getCart };
