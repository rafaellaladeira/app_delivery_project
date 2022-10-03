import PropTypes from 'prop-types';
import numberToBrl from '../shared/currency';
import NavProducts from './CustomerProducts/NavProducts';

function OrderProductDetailsTable({ order }) {
  return (
    <section>
      <NavProducts />
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
          { order.product.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index + 1}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index + 1}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index + 1}`
                }
              >
                { product.SalesProduct.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index + 1}`
                }
              >
                { numberToBrl(product.price) }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index + 1}`
                }
              >
                { numberToBrl(product.price * product.SalesProduct.quantity) }
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </section>
  );
}

OrderProductDetailsTable.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    price: PropTypes.string,
    SalesProduct: PropTypes.shape({
      quantity: PropTypes.string,
    }),
  }),
}.isRequired;

export default OrderProductDetailsTable;
