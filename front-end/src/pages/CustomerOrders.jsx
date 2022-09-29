import { useEffect, useState } from 'react';
import formatDate from '../shared/date';
import numberToBrl from '../shared/currency';
import { getOrders } from '../services/orders';

const ID_LENGTH = 4;

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const ordersData = await getOrders();
      setOrders(ordersData);
    })();
  }, []);

  return (
    <div>
      { orders.map((order) => (
        <a
          href={ `/customer/orders/${order.id}` }
          key={ order.id }
        >
          <article
            data-testid={ `customer_products__element-order-date-${order.id}` }
            style={ { border: '1px solid black', display: 'flex', alignItems: 'center' } }
          >
            <div className="order_id">
              <p>Pedido</p>
              <p
                data-testid={ `customer_orders__element-order-id-${order.id}` }
              >
                { `${order.id}`.padStart(ID_LENGTH, '0') }
              </p>
            </div>
            <div
              className="order_status"
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              { order.status }
            </div>
            <div className="order_info">
              <p
                data-testid={ `customer_orders__element-order-date-${order.id}` }
              >
                { formatDate(order.sale_date) }
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${order.id}` }
              >
                { numberToBrl(order.total_price) }
              </p>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
