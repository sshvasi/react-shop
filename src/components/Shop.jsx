import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <Cart quantity={order.length} />
      {error ? (
        <h3>{error.message}</h3>
      ) : isLoading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </main>
  );
};
export default Shop;
