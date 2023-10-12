import { combineReducers } from 'redux';
import {products, cart}  from './reducer';

// Combina todos los reductores
export default combineReducers({
  products,
  cart,
});
