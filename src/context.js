import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = React.createContext();

const initialState = {
  goods: [],
  order: [],
  isLoading: true,
  error: null,
  isCartShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: { item } });
  };

  value.removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  value.increaseQuantity = id => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  value.decreaseQuantity = id => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  value.toggleCartShow = () => {
    dispatch({ type: 'TOGGLE_CART_SHOW' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
