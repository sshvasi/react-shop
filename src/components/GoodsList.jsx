import GoodsItem from './GoodsItem';

const GoodsList = ({ goods = [] }) => {
  return (
    <div className="goods">
      {!goods.length ? (
        <h3>Nothing here</h3>
      ) : (
        goods.map(item => (
          <GoodsItem
            key={item.key}
            
            {...item}
          />
        ))
      )}
    </div>
  );
};

export default GoodsList;
