import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  return (
    <div className="goods">
      {!goods.length ? (
        <h3>Nothing here</h3>
      ) : (
        goods.map(item => <GoodsItem key={item.id} {...item} />)
      )}
    </div>
  );
};

export default GoodsList;
