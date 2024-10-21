import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import NavbarContainer from '../containers/NavbarContainer';
import HomeContainer from '../containers/HomeContainer';
import ProductContainer from '../containers/ProductContainer';
import AddProductContainer from '../containers/AddProductContainer';
import CartContainer from '../containers/CartContainer';
import AboutContainer from '../containers/AboutContainer';

import { handleGetAllProducts } from '../services/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetAllProducts());
  }

  Page404 = () => {
    return <h1 className="text-center">404 not found!</h1>;
  };

  render() {
    return (
      <>
        <Router>
          <NavbarContainer />
          <Routes>
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/product/:id" element={<ProductContainer />} />
            <Route path="/addProduct" element={<AddProductContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/" element={<AboutContainer />} />
            <Route path="*" element={this.Page404()} />
          </Routes>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;