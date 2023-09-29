function setItem(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

function getItem(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

export { setItem, getItem };
