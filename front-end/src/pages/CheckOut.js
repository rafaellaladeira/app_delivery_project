import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { removeProductCart } from '../services/localStorage';
// getProductsCart,
import { request } from '../services/request';

function Checkout({ history }) {
  const { nameSeller, nameCustomer } = useContext(MyContext);
  const columnNames = ['Item', 'Descrição', 'Quantidade',
    'Valor unitário', 'Sub-total', 'Remover Item'];

  const [totalPrice] = useState(2);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [seller, setSeller] = useState('Fulana Pereira');
  const [sellerId, setSellerId] = useState('');
  // const [idSend, setIdSend] = useState('');
  const [quantity] = useState('');
  const [totalValue] = useState(0);
  // const [productsCart, setProductsCart] = useState([]);

  const dataTest = 'customer_checkout__element-order-table-';

  const getSellerId = useCallback(async (sellers) => {
    await sellers.forEach((e) => {
      if (seller === e.name) setSellerId(e.id);
    });
  }, [seller]);

  const mockDataLocalS = [{
    id: 1,
    name: 'Cerveja',
    quantity: 3,
    unitV: 1.55,
    subT: 15,
  }, {
    id: 2,
    name: 'Refri',
    quantity: 4,
    unitV: 2.59,
    subT: 18,
  }];

  // const getProductsFromLocalStorage = () => {
  //   productsCart.forEach((e) => (

  //   ))
  // }

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
    //  mockDataLocalS.forEach((e) => {
    //   setId(e.id),
    //   setQuantity(e.quantity),
    // });

    const data = {
      userName: nameCustomer,
      sellerId,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'pendente',
      quantity,
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
  }, [getSellerId]);

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
                data-testid={ `${dataTest}item-number-${mockDataLocalS.indexOf(item)}` }
              >
                { mockDataLocalS.indexOf(item) + 1 }

              </td>
              <td
                data-testid={ `${dataTest}name-${mockDataLocalS.indexOf(item)}` }
              >
                { item.name }

              </td>
              <td
                data-testid={ `${dataTest}quantity-${mockDataLocalS.indexOf(item)}` }
              >
                { item.quantity}

              </td>
              <td
                data-testid={ `${dataTest}unit-price-${mockDataLocalS.indexOf(item)}` }
              >
                { item.unitPrice }

              </td>
              <td
                data-testid={ `${dataTest}sub-total-${mockDataLocalS.indexOf(item)}` }
              >
                { item.subTotal }
              </td>
              <td>
                <button
                  type="button"
                  value={ mockDataLocalS.indexOf(item) }
                  data-testid={ `${dataTest}remove-${mockDataLocalS.indexOf(item)}` }
                  onClick={ (e) => handleClickRemove(e) }
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <h1
        data-testid={ `${dataTest}element-order-total-price` }
      >
        Total R$
        {' '}
        { totalValue }
      </h1>
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
