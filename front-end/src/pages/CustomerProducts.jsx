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
  });

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <NavProducts />
      {
        listProducts.map((product) => (
          <CardProduct
            key={ product.id }
            name={ product.name }
            price={ product.price }
            urlImage={ product.urlImage }
          />
        ))
      }
    </>
  );
}

export default CustomerProducts;
