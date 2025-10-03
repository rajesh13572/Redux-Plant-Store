import { ADD_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM } from './actionTypes';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { id, name, price, thumbnail, category } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);

      if (existingItem) {
        // If item exists, just increase quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // Add new item to cart
        return {
          ...state,
          cart: [...state.cart, { id, name, price, thumbnail, category, quantity: 1 }],
        };
      }
    }

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.plantId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.reduce((acc, item) => {
          if (item.id === action.payload.plantId) {
            if (item.quantity > 1) {
              acc.push({ ...item, quantity: item.quantity - 1 });
            }
            // If quantity is 1, it's deleted (not pushed to acc)
          } else {
            acc.push(item);
          }
          return acc;
        }, []),
      };

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.plantId),
      };

    default:
      return state;
  }
};

export default cartReducer;
