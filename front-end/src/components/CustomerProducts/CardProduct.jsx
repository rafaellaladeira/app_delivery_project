import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomerProducts.css';
import { produce } from 'immer';
import MyContext from '../../context/MyContext';
// import { addProductCart } from '../../services/localStorage';

function CardProduct({ id, name, price, urlImage }) {
  const [qtdProducts, setQtdProducts] = useState(0);
  // const [productsCart, setProductsCart] = useState([]);
  const { cartProduct, setCartProduct } = useContext(MyContext);

  const valueQuantity = (verifyQtd) => (
    verifyQtd ? setQtdProducts(qtdProducts + 1) : setQtdProducts(qtdProducts - 1)
  );

  useEffect(() => {
    const addToCart = () => {
      // const total = parseFloat(qtdProducts * price).toFixed(2);
      const cart = { id, name, quantity: qtdProducts, unityPrice: price };

      const existsProduct = cartProduct.findIndex((p) => p.id === id);
      // console.log(testFind);
      const NOT_FOUND = 0;
      const newCart = produce(cartProduct, (draft) => {
        if (existsProduct < NOT_FOUND) {
          draft.push(cart);
          // setCartProduct([...cartProduct, cart]);
        } else {
          draft[existsProduct].quantity = cart.quantity;
        }
      });
      setCartProduct(newCart);
    };
    addToCart();
  }, [cartProduct, id, name, price, qtdProducts, setCartProduct]);

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
          onClick={ () => valueQuantity(false) }
          disabled={ qtdProducts < 1 }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ qtdProducts }
          onChange={ (e) => setQtdProducts(e.target.value) }
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
