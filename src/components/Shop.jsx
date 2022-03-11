import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};
export default Shop;
