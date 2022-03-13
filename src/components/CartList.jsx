import CartItem from './CartItem';

const CartList = ({ order = [], removeFromCart, onCartShow }) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map(item => (
          <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      <i className="material-icons cart-close" onClick={onCartShow}>
        close
      </i>
    </ul>
  );
};

export default CartList;
