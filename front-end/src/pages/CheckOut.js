import React, { useEffect, useState } from 'react';
import { getProductsCart } from '../services/localStorage';

function Checkout() {
  const columnNames = ['Item', 'Descrição', 'Quantidade',
    'Valor unitário', 'Sub-total', 'Remover Item'];
  const [productsCart, setProductsCart] = useState([]);
  console.log(productsCart);
  useEffect(() => {
    setProductsCart(getProductsCart());
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              columnNames.map((column) => (
                <th key={ column }>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
      </table>
      <p>loren</p>
    </div>
  );
}

export default Checkout;
