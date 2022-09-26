import React from 'react';
import PropTypes from 'prop-types';

function CardProduct({ id, name, price, urlImage }) {
  return (
    <section className="card-products">
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </span>
      <img
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
        // onClick={ valueQuantity(true) }
      >
        +
      </button>
      <span>0</span>
      <button
        type="button"
        // onClick={ valueQuantity(false) }
      >
        -
      </button>
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
