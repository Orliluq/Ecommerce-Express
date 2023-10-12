import { connect } from 'react-redux';
import Product from '../pages/Product';
import { addToCart, updateProduct, deleteProduct } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
  cartItems: state.cart.cartItems,
});

const mapDisppatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
  updateProductHandler: (product) => dispatch(updateProduct(product)),
  deleteProductHandler: (product) => dispatch(deleteProduct(product)),
});

export default connect(mapStateToProps, mapDisppatchToProps)(Product);
