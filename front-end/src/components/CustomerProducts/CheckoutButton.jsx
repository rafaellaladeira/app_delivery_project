import React from 'react';

function CheckoutButton() {
  return (
    <button
      className="btn-checkout"
      type="button"
      data-testid="customer_products__checkout-bottom-value"
    >
      Meu Carrinho: R$ 10,00
    </button>
  );
}

export default CheckoutButton;
