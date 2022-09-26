const translateOrder = (order) => ({
  pending: 'PENDENTE',
  preparing: 'PREPARANDO',
  delivered: 'ENTREGUE',
}[order] || 'Indisponível');

export default translateOrder;
