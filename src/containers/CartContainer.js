import { connect } from 'react-redux';
import Cart from '../pages/Cart';
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
  removeFromCartHandler: (product) => dispatch(removeFromCart(product)),
  increaseQtyHandler: (product) => dispatch(increaseQty(product)),
  decreaseQtyHandler: (product) => dispatch(decreaseQty(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
