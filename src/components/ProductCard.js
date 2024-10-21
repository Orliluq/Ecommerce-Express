import React from 'react';
import { Link } from 'react-router-dom';
/* import Ratings from './Ratings'; */
import styles from '../styles/home.module.css';
import toast from 'react-hot-toast';

export default function ProductCard(props) {
  let { product, addToCartHandler, cartItems } = props;
  const { id, title, img, price, ratings } = props.product;

  const handleAddToCart = (product) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id === product.id
    );
    if (filteredCartItems.length > 0) {
      toast.error('Producto ya en el carrito', {
        position: 'top-center',
        style: {
          borderRadius: '10px',
          background: '#363636',
          color: '#fff',
        },
      });
      return null;
    } else {
      product.key = product.id;
      product.qty = 1;
      addToCartHandler(product);
      toast.success('Agregado al carrito', {
        position: 'top-center',
        style: {
          borderRadius: '10px',
          background: '#363636',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div
      className={`col-sm-1 col-md-2 col-lg-3 col-xl-4  rounded shadow mx-2 my-3 ${styles.productCardWrapper}`}
    >
      <div className="card">
        <img
          src={`${img}`}
          alt="product-img"
          className={`cart-img-top rounded-1 ${styles.cardImg}`}
        />

        <div className="card-body text-center"> 
          <div className="mb-2">
            <p className="font-weight-bold mb-2">
              <Link
                to={`/product/${id}`}
                className="text-dark mb-2 font-weight-bold text-decoration-none"
                data-abc="true"
              >
                {title}
              </Link>
            </p>
          </div>

          <h5 className="mb-0 font-weight-semibold">
            <small>$</small>
            {price}
          </h5>

          {/* <Ratings ratings={ratings} /> */}

          <button
            type="button mt-2"
            className="btn btn-outline-info btn-sm mt-2"
            onClick={() => handleAddToCart(product)}
          >
            <i className="fa fa-cart-plus mr-2"></i> Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
