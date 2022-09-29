import React, { useState, useEffect, useCallback, useContext } from 'react';
import CardProduct from '../components/CustomerProducts/CardProduct';
import CheckoutButton from '../components/CustomerProducts/CheckoutButton';
import NavProducts from '../components/CustomerProducts/NavProducts';
import MyContext from '../context/MyContext';
import { getAllProducts } from '../services/request';

function CustomerProducts() {
  const [listProducts, setListProducts] = useState([]);
  const { cartProduct } = useContext(MyContext);

  const getAll = useCallback(async () => {
    const products = await getAllProducts('customer/products');
    // console.log(products);
    setListProducts(products);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  console.log(cartProduct);
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
