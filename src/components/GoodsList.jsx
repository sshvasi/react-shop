import GoodsItem from './GoodsItem';

const GoodsList = ({ goods = [], addToCart }) => {
  return (
    <div className="goods">
      {!goods.length ? (
        <h3>Nothing here</h3>
      ) : (
        goods.map(item => (
          <GoodsItem key={item.id} {...item} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default GoodsList;
