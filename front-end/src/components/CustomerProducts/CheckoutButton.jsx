import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import '../../styles/CheckoutButton.css';

function CheckoutButton() {
  const { cartProduct } = useContext(MyContext);
  const [total, setTotal] = useState(0);
  const [goCheckout, setGoCheckout] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  const checkoutPage = (checkout) => {
    if (checkout) {
      return setGoCheckout(true);
    }
  };

  const INITIAL_VALUE_CART = 0;

  const calcTotal = () => {
    if (cartProduct.length === 0) {
      setBtnDisable(true);
      return setTotal(Number(INITIAL_VALUE_CART.toFixed(2)));
    }
    if (cartProduct.length === 1) {
      console.log(total);
      setBtnDisable(false);
      return setTotal(Number(cartProduct[0].subTotal.toFixed(2)));
    }

    const sumValues = cartProduct.reduce((acc, value) => (
      acc + Number(value.subTotal)
    ), 0);

    console.log(sumValues);
    setBtnDisable(false);
    setTotal(Number(sumValues.toFixed(2)));
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
