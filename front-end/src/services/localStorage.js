const PRODUCTS_CART = 'productsCart';
const USER = 'user';
const TOTAL = 'total';

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

// pega o token do localStorage
export const getTokenUser = () => {
  const user = JSON.parse(localStorage.getItem(USER)) || [];
  return user.token;
};

// add o TOTAL do localStorage
export const addTotal = (total) => {
  localStorage.setItem(TOTAL, JSON.stringify(total));
};

// pega o total do localStorage
export const getTotal = () => {
  const result = JSON.parse(localStorage.getItem(TOTAL)) || [];
  return result;
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
