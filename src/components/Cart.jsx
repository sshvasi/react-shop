import { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
  const { order, toggleCartShow } = useContext(ShopContext);

  return (
    <div className="cart blue darken-4 white-text" onClick={toggleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {order.length ? (
        <span className="cart-quantity">{order.length}</span>
      ) : null}
    </div>
  );
};

export default Cart;
