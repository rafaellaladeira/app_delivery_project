import { useEffect, useState } from 'react';
import formatDate from '../shared/date';
import numberToBrl from '../shared/currency';
import { getOrder } from '../services/orders';
import OrderProductDetailsTable from '../components/SellerDetailsOrder';
import NavProducts from '../components/CustomerProducts/NavProducts';

const ID_LENGTH = 4;
const LAST_INDEX = -1;

export default function SellerOrder() {
  const orderId = window.location.pathname.split('/').at(LAST_INDEX);
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    (async () => {
      const orderData = await getOrder(orderId);
      setOrder(orderData);
    })();
  }, [orderId]);

  if (!order) return (<div />);
  return (
    <div>
      <NavProducts />
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
          { order.status !== 'delivered' && (
            <button
              type="button"
              data-testid="seller_order_details__button-delivery-check"
              disabled
            >
              Marcar como entregue
            </button>
          ) }
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
