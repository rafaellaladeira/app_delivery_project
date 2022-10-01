import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import {
  removeProductCart,
  getProductsCart,
  getTokenUser,
  getNameUser,
  getTotal,
  addTotal } from '../services/localStorage';
import { request } from '../services/request';

function Checkout({ history }) {
  const { nameSeller } = useContext(MyContext);
  const [nameCustomer, setNameCustomer] = useState('');
  const columnNames = ['Item', 'Descrição', 'Quantidade',
    'Valor unitário', 'Sub-total', 'Remover Item'];
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState(2);
  const [productsCart, setProductsCart] = useState([]);
  const [total, setTotal] = useState(0);
  // const [decrement, setTotalDecrement] = useState(0);
  const [token, setToken] = useState('');

  const dataTest = 'customer_checkout__element-order-table-';

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
  };

  const handleClickRemove = (e, a) => {
    setTotal(Math.abs(total - a));
    removeProductCart(e);
    setProductsCart(getProductsCart());
  };

  const handleSelect = (e) => {
    setSellerId(+e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      userName: nameCustomer,
      sellerId,
      totalPrice: total,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'Pendente',
      productsCart,
    };
    try {
      const id = await request('customer/checkout', data, token);
      history.push(`orders/${id}`);
      if (productsCart.length === 0) {
        setTotal(0);
        addTotal(0);
      } else {
        addTotal(Number(total.toFixed(2)));
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    setTotal(getTotal());
    setNameCustomer(getNameUser());
    setToken(getTokenUser());
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

        {productsCart.map((item) => (

          <tbody key={ item.name }>
            <tr>
              <td
                data-testid={ `${dataTest}item-number-${productsCart.indexOf(item)}` }
              >
                { productsCart.indexOf(item) + 1 }

              </td>
              <td
                data-testid={ `${dataTest}name-${productsCart.indexOf(item)}` }
              >
                { item.name }

              </td>
              <td
                data-testid={ `${dataTest}quantity-${productsCart.indexOf(item)}` }
              >
                { item.quantity}

              </td>
              <td
                data-testid={ `${dataTest}unit-price-${productsCart.indexOf(item)}` }
              >
                { item.unityPrice.replace('.', ',') }

              </td>
              <td
                data-testid={ `${dataTest}sub-total-${productsCart.indexOf(item)}` }
              >
                { item.subTotal.toFixed(2).replace('.', ',') }
              </td>
              <td>
                <button
                  type="submit"
                  value={ item.id }
                  data-testid={ `${dataTest}remove-${productsCart.indexOf(item)}` }
                  onClick={ () => handleClickRemove(item.id, item.subTotal) }
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <h1
        data-testid="customer_checkout__element-order-total-price"
      >
        { total.toFixed(2).replace('.', ',') }
      </h1>
      <section>

        <h2>Detalhes e Endereço para Entrega</h2>

        <label
          htmlFor="seller"
        >
          P. Vendedora responsável

          <select
            id="seller"
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
