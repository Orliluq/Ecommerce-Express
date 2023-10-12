import { connect } from 'react-redux';
import AddProduct from '../pages/AddProduct';
import { addProduct } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
