import { ADD_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM } from './actionTypes';

export const addItem = (plant) => ({
  type: ADD_ITEM,
  payload: plant,
});

export const increaseQuantity = (plantId) => ({
  type: INCREASE_QUANTITY,
  payload: { plantId },
});

export const decreaseQuantity = (plantId) => ({
  type: DECREASE_QUANTITY,
  payload: { plantId },
});

export const deleteItem = (plantId) => ({
  type: DELETE_ITEM,
  payload: { plantId },
});
