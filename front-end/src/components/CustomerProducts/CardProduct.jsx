import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomerProducts.css';

function CardProduct({ id, name, price, urlImage }) {
  const [qtdProducts, setQtdProducts] = useState(0);

  const valueQuantity = (verifyQtd) => (
    verifyQtd ? setQtdProducts(qtdProducts + 1) : setQtdProducts(qtdProducts - 1));

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
          width="200px"
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
          onClick={ () => valueQuantity(false) }
          disabled={ qtdProducts < 1 }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ qtdProducts }
          readOnly

        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => valueQuantity(true) }
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
