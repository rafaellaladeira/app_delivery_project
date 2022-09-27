const PRODUCTS_CART = 'productsCart';

// adiciona produto no carrinho

export const addProductCart = (product) => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_CART)) || [];
  const newProducts = [...products, product];
  localStorage.setItem(PRODUCTS_CART, JSON.stringify(newProducts));
};

export const addUser = (user) => {
  const { name, email, role, token } = user;
  localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
};

export const getNameUser = () => {
  const user = JSON.parse(localStorage.getItem('user')) || [];
  return user.name;
};

export const cleanUserLocalstorage = () => localStorage.clear();

// remove produto do carrinho

export const removeProductCart = (id) => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_CART)) || [];
  const newProducts = products.filter((product) => product.id !== id);
  localStorage.setItem(PRODUCTS_CART, JSON.stringify(newProducts));
};
// busca produtos do carrinho

export const getProductsCart = () => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_CART)) || [];
  return products;
};
