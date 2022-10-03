import { useEffect, useState } from 'react';
import formatDate from '../shared/date';
import numberToBrl from '../shared/currency';
import { getInfo } from '../services/request';
import NavProducts from '../components/CustomerProducts/NavProducts';

const ID_LENGTH = 4;

function SellerOrders() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    (async () => {
      const sellerData = await getInfo('seller/orders');
      setSellers(sellerData);
    })();
  }, []);

  return (
    <div>
      <NavProducts />
      { sellers.map((seller) => (
        <a
          href={ `/seller/orders/${seller.id}` }
          key={ seller.id }
        >
          <article
            data-testid={ `seller_products__element-order-date-${seller.id}` }
            style={ { border: '1px solid black', display: 'flex', alignItems: 'center' } }
          >
            <div className="order_id">
              <p>Pedido</p>
              <p
                data-testid={ `seller_orders__element-order-id-${seller.id}` }
              >
                { `${seller.id}`.padStart(ID_LENGTH, '0') }
              </p>
            </div>
            <div
              className="order_status"
              data-testid={ `seller_orders__element-delivery-status-${seller.id}` }
            >
              { seller.status }
            </div>
            <div className="order_info">
              <p
                data-testid={ `seller_orders__element-order-date-${seller.id}` }
              >
                { formatDate(seller.sale_date) }
              </p>
              <p
                data-testid={ `seller_orders__element-card-price-${seller.id}` }
              >
                { numberToBrl(seller.total_price) }
              </p>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default SellerOrders;
