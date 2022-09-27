import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { removeProductCart } from '../services/localStorage';
// getProductsCart,
import { request } from '../services/request';

function Checkout({ history }) {
  const { nameSeller } = useContext(MyContext);
  const columnNames = ['Item', 'Descrição', 'Quantidade',
    'Valor unitário', 'Sub-total', 'Remover Item'];
  const [customerName] = useState('Cliente Zé Birita');
  const [totalPrice] = useState(2);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [seller, setSeller] = useState('Fulana Pereira');
  const [sellerId, setSellerId] = useState('');
  // const [productsCart, setProductsCart] = useState([]);

  const dataTest = 'customer_checkout__';

  const getSellerId = async (sellers) => {
    await sellers.forEach((e) => {
      if (seller === e.name) setSellerId(e.id);
    });
  };

  const mockDataLocalS = [{
    item: 1,
    name: 'Cerveja',
    quantity: 3,
    unitV: 1.55,
    subT: 15,
  }, {
    item: 2,
    name: 'Refri',
    quantity: 4,
    unitV: 2.59,
    subT: 18,
  },
  { total: 20,
  }];

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
    getSellerId(nameSeller);
  };

  const handleClickRemove = (e) => {
    removeProductCart(e);
  };

  const handleSelect = (e) => {
    setSeller(e.target.value);
    getSellerId(nameSeller);
  };

  const handleSubmit = async () => {
    const data = {
      userName: customerName,
      sellerId,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'pendente',
    };
    try {
      const id = await request('customer/checkout', data);
      history.push(`orders/${id}`);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    // setProductsCart(getProductsCart());
    getSellerId();
  }, []);

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

        {mockDataLocalS.map((item) => (

          <tbody key={ item.name }>
            <tr>
              <td
                data-testid={ `${dataTest}element-order-table-item-number-${item.item}` }
              >
                { item.item }

              </td>
              <td
                data-testid={ `${dataTest}element-order-table-name-${item.item}` }
              >
                { item.name }

              </td>
              <td
                data-testid={ `${dataTest}element-order-table-quantity-${item.item}` }
              >
                { item.quantity}

              </td>
              <td
                data-testid={ `${dataTest}element-order-table-unit-price-${item.item}` }
              >
                { item.unitV }

              </td>
              <td
                data-testid={ `${dataTest}element-order-table-sub-total-${item.item}` }
              >
                { item.subT }
              </td>
              <td>
                <button
                  type="button"
                  value={ item.item }
                  data-testid={ `${dataTest}element-order-table-remove-${item.item}` }
                  onClick={ (e) => handleClickRemove(e) }
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <section>

        <h2>Detalhes e Endereço para Entrega</h2>

        <label
          htmlFor="seller"
        >
          P. Vendedora responsável

          <select
            id="seller"
            value={ seller }
            name="seller"
            onChange={ (e) => handleSelect(e) }
            data-testid="customer_checkout__select-seller"
          >
            { nameSeller.map((e) => (
              <option
                value={ e.id }
                key={ e.name }
              >
                { e.name }
              </option>
            ))}
          </select>

        </label>

        <label htmlFor="address">
          Endereço
          <input
            name="address"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address"
            placeholder="Rua Bom Sucesso"
          />
        </label>

        <label htmlFor="number">
          Número
          <input
            name="number"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address-number"
            placeholder="198"
          />
        </label>

        <button
          type="submit"
          onClick={ handleSubmit }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>
      </section>
    </div>
  );
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Checkout;
