import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = item => {
    const itemIndex = order.findIndex(element => element.id === item.id);
    if (itemIndex === -1) {
      console.log('new item');
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      console.log('old item');
      const newOrder = order.map((orderItem, index) =>
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(newOrder);
    }
  };

  const fetchGoods = () => {
    setIsLoading(true);
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then(response => response.json())
      .then(result => {
        if (result.featured) setGoods(result.featured);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => fetchGoods(), []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {isLoading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </main>
  );
};
export default Shop;
