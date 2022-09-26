import { useEffect, useState } from 'react';
import translateOrder from '../shared/orderState';
import formatDate from '../shared/date';
import numberToBrl from '../shared/currency';
import { getOrder } from '../services/orders';

const ID_LENGTH = 4;
const LAST_INDEX = -1;

export default function CustomerOrder() {
  const orderId = window.location.pathname.split('/').at(LAST_INDEX);
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    (async () => {
      const orderData = await getOrder(orderId);
      setOrder(orderData);
    })();
  }, []);

  if (!order) return (<div />);
  return (
    <div>
      <h1>Detalhes do pedido</h1>
      <article>
        <div
          className="details-header"
          style={ { display: 'flex', justifyContent: 'space-evenly' } }
        >
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido
            { `${order.id}`.padStart(ID_LENGTH, '0') }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vendedor:
            { order.seller.name }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { formatDate(order.sale_date) }
          </p>
          <p
            data-testid={
              'customer_order_details__'
              + 'element-order-details-label-delivery-status'
            }
          >
            { translateOrder(order.status) }
          </p>
          { order.status !== 'delivered' && (
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              Marcar como entregue
            </button>
          ) }
        </div>
        <table className="details-items">
          <thead>
            <tr>
              <td>Item</td>
              <td>Descrição</td>
              <td>Quantidade</td>
              <td>Valor Unitário</td>
              <td>Sub-total</td>
            </tr>
          </thead>
          <tbody>
            { order.products.map((product, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index + 1}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index + 1}`
                  }
                >
                  { product.product.name }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index + 1}`
                  }
                >
                  { product.quantity }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index + 1}`
                  }
                >
                  { numberToBrl(product.product.price) }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index + 1}`
                  }
                >
                  { numberToBrl(product.quantity * product.product.price) }
                </td>
              </tr>
            )) }
          </tbody>
        </table>

        <h3
          data-testid="customer_order_details__element-order-total-price"
        >
          Total:
          { numberToBrl(order.total_price) }
        </h3>
      </article>
    </div>
  );
}
