import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

const Alert = () => {
  const { closeAlert, alertName: name = '' } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
