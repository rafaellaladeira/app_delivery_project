import React, { useState, useEffect, useCallback } from 'react';
import CardProduct from '../components/CustomerProducts/CardProduct';
import NavProducts from '../components/CustomerProducts/NavProducts';
import { getAllProducts } from '../services/request';

function CustomerProducts() {
  const [listProducts, setListProducts] = useState([]);

  const getAll = useCallback(async () => {
    const products = await getAllProducts('customer/products');
    console.log(products);
    setListProducts(products);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <NavProducts />
      {
        listProducts.map((product) => (
          <>
            <CardProduct
              key={ product.id }
              id={ product.id }
              name={ product.name }
              price={ product.price }
              urlImage={ product.urlImage }
            />
            <button
              type="button"
              data-testid="customer_products__checkout-bottom-value"
            >
              R$ 10,00
            </button>
          </>
        ))
      }
    </>
  );
}

export default CustomerProducts;
