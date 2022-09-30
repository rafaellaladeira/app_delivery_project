import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { addProductCart } from '../../services/localStorage';
import '../../styles/CheckoutButton.css';

function CheckoutButton() {
  const { cartProduct } = useContext(MyContext);
  const { total, setTotal } = useContext(MyContext);
  const [goCheckout, setGoCheckout] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  const checkoutPage = (checkout) => {
    const cartToCheckout = cartProduct.filter((prod) => prod.subTotal !== 0); // ## REMOVE Produto com qtd 0 antes de adicionar no localstorage.

    addProductCart(cartToCheckout);
    if (checkout) {
      return setGoCheckout(true);
    }
  };

  const INITIAL_VALUE_CART = 0;

  const calcTotal = () => {
    if (total === INITIAL_VALUE_CART) {
      setBtnDisable(true);
    }

    const sumValues = cartProduct.reduce((acc, value) => (
      acc + Number(value.subTotal)
    ), 0);

    setTotal(Number(sumValues.toFixed(2)));
    if (total > INITIAL_VALUE_CART) {
      setBtnDisable(false);
    }
  };

  useEffect(() => {
    calcTotal();
  });

  return (
    <button
      className="btn-checkout"
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => checkoutPage(true) }
      disabled={ btnDisable }
    >
      <p
        className="btn-value"
        data-testid="customer_products__checkout-bottom-value"
      >
        {
          `${total.toFixed(2).replace('.', ',')}`
        }
      </p>
      {
        goCheckout ? <Redirect to="/customer/checkout" /> : null
      }
    </button>
  );
}

export default CheckoutButton;
