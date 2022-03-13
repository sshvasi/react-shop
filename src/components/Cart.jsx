const Cart = ({ quantity = 0, onCartShow }) => {
  return (
    <div className="cart blue darken-4 white-text" onClick={onCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
