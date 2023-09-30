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
    cartItem = {
      amount: 1,
      product,
    };

    currentCart.push(cartItem);
  }

  setItem(LSKey, currentCart);
  return cartItem;
}

function removeFromCart() {}

function changeQuantity() {}

export { addToCart, removeFromCart, changeQuantity, getCart };
