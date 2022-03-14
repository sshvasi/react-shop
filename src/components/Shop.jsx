import { useContext, useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';
import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { setGoods, isCartShow, alertName } = useContext(ShopContext);

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

  useEffect(
    () => fetchGoods(),
    // eslint-disable-next-line
    []
  );

  return (
    <main className="container content">
      <Cart />
      {error ? (
        <h3>{error.message}</h3>
      ) : isLoading ? (
        <Preloader />
      ) : (
        <GoodsList />
      )}
      {isCartShow && <CartList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
