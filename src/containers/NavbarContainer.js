import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Navbar);
