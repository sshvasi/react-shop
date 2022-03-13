const CartItem = ({ id, name, price, quantity }) => {
  return (
    <li className="collection-item ">
      {name} x{quantity} = {price * quantity}
      <span className="secondary-content">
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
};

export default CartItem;
