import { connect } from 'react-redux';
import Home from '../pages/Home';
import { addToCart } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
