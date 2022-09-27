import React from 'react';
import PropTypes from 'prop-types';

function CardProduct({ id, name, price, urlImage }) {
  // const [quantityProducts, setQuantityProducts] = useState(0);
  return (
    <section>
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
        // onClick={ valueQuantity(false) }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantityProducts }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        // onClick={ valueQuantity(true) }
      >
        +
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
