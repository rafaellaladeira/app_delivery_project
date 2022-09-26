import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { getProductsCart } from '../services/localStorage';
import { request } from '../services/request';

function Checkout({ history }) {
  const nameSeller = useContext(MyContext);
  const columnNames = ['Item', 'Descrição', 'Quantidade',
    'Valor unitário', 'Sub-total', 'Remover Item'];
  const [customerName, setCustomerName] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [seller, setSeller] = useState('');
  const [order, setOrder] = useState('');
  const [productsCart, setProductsCart] = useState([]);
  console.log(productsCart);
  // const testId = 'customer_checkout__';

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
    // if (name === 'seller') setSeller(select);
  };

  //  const handleClickRemove = () => {

  //  };

  const handleSubmit = async () => {
    setCustomerName('Cliente Zé Birita');
    setTotalPrice(2);
    setSeller('Fulana Pereira');

    const data = {
      userName: customerName,
      sellerName: seller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'pendente',
    };

    try {
      const result = await request('customer/checkout', data);
      setOrder(result);
      history.push(`customer/orders/${order}`);
      console.log(`${order}`);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    setProductsCart(getProductsCart());
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

        {/* {productsCart.map((item) => (

          <tbody key={ item.name }>
            <tr>
              <td
                data-testid={ `element-order-table-item-number-${item.item}` }
              >
                { item.item }

              </td>
              <td
                data-testid={ `element-order-table-name-${item.item}` }
              >
                { item.name }

              </td>
              <td
                data-testid={ `element-order-table-quantity-${item.item}` }
              >
                { item.quantity}

              </td>
              <td
                data-testid={ `element-order-table-unit-price-${item.item}` }
              >
                { item.vunit }

              </td>
              <td
                data-testid={ `element-order-table-sub-total-${item.item}` }
              >
                { item.total }
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `element-order-table-remove-${item.item}` }
                  onClick={ handleClick }
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))} */}
      </table>

      <section>

        <h2>Detalhes e Endereço para Entrega</h2>

        { nameSeller.map((e) => (
          <label
            key={ e.name }
            htmlFor="seller"
          >
            P. Vendedora responsável

            <select
              id="seller"
              value={ seller }
              name="seller"
              onChange={ handleChange }
              data-testid="customer_checkout__select-seller"
            >
              <option>{ e.name }</option>
            </select>
          </label>

        ))}

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
