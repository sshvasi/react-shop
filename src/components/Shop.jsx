import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToCart = item => {
    const itemIndex = order.findIndex(element => element.id === item.id);
    if (itemIndex === -1) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => { 
        return index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem;
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromCart = id => {
    const newOrder = order.filter(item => item.id !== id);
    setOrder(newOrder);
  };

  const increaseQuantity = id => {
    const newOrder = order.map(item => {
      const newQuantity = item.quantity + 1;
      return item.id === id ? { ...item, quantity: newQuantity } : item;
    });
    setOrder(newOrder);
  };

  const decreaseQuantity = id => {
    const newOrder = order.map(item => {
      const newQuantity = item.quantity - 1;
      return item.id === id
        ? { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 }
        : item;
    });
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const fetchGoods = async () => {
    const response = await fetch(API_URL, {
      headers: { Authorization: API_KEY },
    });
    try {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const result = await response.json();
      setGoods(result.featured);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => fetchGoods(), []);

  return (
    <main className="container content">
      <Cart quantity={order.length} onCartShow={handleCartShow} />
      {error ? (
        <h3>{error.message}</h3>
      ) : isLoading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          onCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;

Math.max();
