import { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = ({
  id,
  name,
  description,
  price,
  full_background: fullBackground,
}) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={fullBackground} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({ id, name, price })}>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.5rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
