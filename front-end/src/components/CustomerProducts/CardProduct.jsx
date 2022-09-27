import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomerProducts.css';
import { addProductCart } from '../../services/localStorage';

function CardProduct({ id, name, price, urlImage }) {
  const [qtdProducts, setQtdProducts] = useState(0);

  const addToCart = (prodQtd) => {
    // eslint-disable-next-line max-len
    const subTotal = parseFloat(price * prodQtd);
    const cart = { id, name, quantity: prodQtd, unityPrice: price, subTotal };
    addProductCart(cart);
    // setQtdProducts(Number(cart.quantity));
    // console.log(cart.quantity);
  };

  let x = 0;
  let y = 0;

  const addProd = (event) => {
    x += 1;
    y = x;
    console.log(event.target);
    setQtdProducts();
    addToCart(x);
  };

  // const addProd = (() => {
  //   setQtdProducts(qtdProducts + 1);
  // }, () => addToCart(qtdProducts));

  const rmProd = () => setQtdProducts(qtdProducts - 1);

  useEffect(() => {
  }, [qtdProducts]);

  return (
    <section className="card-product">
      <div
        className="card-div-product"
      >
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { new Intl.NumberFormat(
            'pt-BR',
            { style: 'currency', currency: 'BRL' },
          ).format(price) }
        </p>
        <img
          className="img-product"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ name }
        />
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          // onClick={ () => valueQuantity(false) }
          onClick={ () => rmProd() }
          disabled={ qtdProducts < 1 }
        >
          -
        </button>
        <input
          type="number"
          id="input "
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ qtdProducts }
          onChange={ (event) => addProd(event) }
          // readOnly

        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          // onClick={ () => valueQuantity(true) }
          onClick={ () => addProd() }
        >
          +
        </button>
      </div>
    </section>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
}.isRequired;

export default CardProduct;