const PRODUCTS_CART = 'productsCart';

// adiciona produto no carrinho

export const addProductCart = (product) => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_CART)) || [];
  const newProducts = [...products, product];
  localStorage.setItem(PRODUCTS_CART, JSON.stringify(newProducts));
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
