import React, { useState, useEffect } from 'react';
import CardProduct from '../components/CustomerProducts/CardProduct';
import CheckoutButton from '../components/CustomerProducts/CheckoutButton';
import NavProducts from '../components/CustomerProducts/NavProducts';
import { getAllProducts } from '../services/request';

function CustomerProducts() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const products = await getAllProducts('customer/products');
      setListProducts(products);
    };
    getAll();
  }, []);

  return (
    <>
      <NavProducts />
      {
        listProducts.map((product) => (
          <CardProduct
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ product.price }
            urlImage={ product.urlImage }
          />
        ))
      }
      <CheckoutButton />
    </>
  );
}

export default CustomerProducts;
