import { useContext } from 'react';
import { ShopContext } from '../context';

const CartItem = ({ id, name, price, quantity }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShopContext);

  return quantity ? (
    <li className="collection-item ">
      {name} x{quantity} = {price * quantity} руб.
      <span className="secondary-content">
        <i
          className="material-icons cart-change"
          onClick={() => increaseQuantity(id)}
        >
          add
        </i>
        <i
          className="material-icons cart-change"
          onClick={() => decreaseQuantity(id)}
        >
          remove
        </i>
        <i
          className="material-icons cart-delete"
          onClick={() => removeFromCart(id)}
        >
          close
        </i>
      </span>
    </li>
  ) : null;
};

export default CartItem;
