import { useEffect, useState } from 'react';
import formatDate from '../shared/date';
import numberToBrl from '../shared/currency';
import { getOrder } from '../services/orders';
import OrderProductDetailsTable from '../components/SellerDetailsOrder';
import { update } from '../services/request';

const ID_LENGTH = 4;
const LAST_INDEX = -1;
const PREPARANDO = { status: 'Preparando' };
const TRANSITO = { status: 'Em Trânsito' };

export default function SellerOrder() {
  const orderId = window.location.pathname.split('/').at(LAST_INDEX);
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    (async () => {
      const orderData = await getOrder(orderId);
      setOrder(orderData);
    })();
  }, [orderId, order]);

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
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            Pedido
            { `${order.id}`.padStart(ID_LENGTH, '0') }
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-seller-name"
          >
            P. Vendedor:
            { order.seller.name }
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { formatDate(order.saleDate) }
          </p>
          <p
            data-testid={
              'seller_order_details__'
              + 'element-order-details-label-delivery-status'
            }
          >
            { order.status }
          </p>

          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ order.status !== 'Pendente' }
            onClick={ () => update(`/seller/orders/${order.id}`, PREPARANDO) }
          >
            Preparar pedido
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ order.status !== 'Preparando' }
            onClick={ () => update(`/seller/orders/${order.id}`, TRANSITO) }
          >
            Saiu para entrega
          </button>
        </div>
        <OrderProductDetailsTable order={ order } />

        <h3
          data-testid="seller_order_details__element-order-total-price"
        >
          Total:
          { numberToBrl(order.totalPrice) }
        </h3>
      </article>
    </div>
  );
}
