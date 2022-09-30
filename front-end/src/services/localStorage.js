const PRODUCTS_CART = 'productsCart';
const USER = 'user';

// adiciona o usuário no localStorage
export const addUser = (user) => {
  const { name, email, role, token } = user;
  localStorage.setItem(USER, JSON.stringify({ name, email, role, token }));
};

// pega o usuário do localStorage
export const getNameUser = () => {
  const user = JSON.parse(localStorage.getItem(USER)) || [];
  return user.name;
};

// limpa o localStorage
export const cleanUserLocalstorage = () => localStorage.clear();

// adiciona produto no carrinho
export const addProductCart = (catProducts) => {
  localStorage.setItem(PRODUCTS_CART, JSON.stringify(catProducts));
};

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
