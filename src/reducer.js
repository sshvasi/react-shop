export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload.goods || [],
      };
    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        element => element.id === payload.item.id
      );

      let newOrder = null;

      if (itemIndex === -1) {
        newOrder = [...state.order, { ...payload.item, quantity: 1 }];
      } else {
        newOrder = state.order.map((item, index) => {
          return index === itemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }

      return { ...state, order: newOrder, alertName: payload.name };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id),
      };
    case 'INCREASE_QUANTITY': {
      const newOrder = state.order.map(item => {
        const newQuantity = item.quantity + 1;
        return item.id === payload.id
          ? { ...item, quantity: newQuantity }
          : item;
      });

      return { ...state, order: newOrder };
    }
    case 'DECREASE_QUANTITY': {
      const newOrder = state.order.map(item => {
        const newQuantity = item.quantity - 1;
        return item.id === payload.id
          ? { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 }
          : item;
      });

      return { ...state, order: newOrder };
    }
    case 'TOGGLE_CART_SHOW': {
      return { ...state, isCartShow: !state.isCartShow };
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    default:
      return state;
  }
};
