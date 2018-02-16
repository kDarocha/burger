import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const fetchIngredientsFailed = (state) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFailed = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit();
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart();
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess();
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed();
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart();
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess();
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFailed();
    default: return state;
  }
};

export default reducer;
