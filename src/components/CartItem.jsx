const CartItem = ({ id, name, price, quantity, removeFromCart }) => {
  return (
    <li className="collection-item ">
      {name} x{quantity} = {price * quantity} руб.
      <span className="secondary-content">
        <i
          className="material-icons cart-delete"
          onClick={() => removeFromCart(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};

export default CartItem;
