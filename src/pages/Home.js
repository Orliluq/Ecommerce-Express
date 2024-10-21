import React from 'react';
import AllProductsWrapper from '../components/AllProductsWrapper';
import styles from '../styles/home.module.css';

export default function Home(props) {
  const { allProducts, addToCartHandler, cartItems } = props;

  let unSortedProducts;
  let sortedProducts;

  if (allProducts) {
    unSortedProducts = [...allProducts]; // unsorted array of products
    const toBeSorted = [...allProducts]; 
    sortedProducts = toBeSorted.sort(   // sorted array of products
      (product1, product2) => product1.price - product2.price
    );
  }

  return (
    <div className="container ">
      <div className="d-flex flex-wrap justify-content-around my-5 position-relative">
        {unSortedProducts && sortedProducts ? (
          <AllProductsWrapper
            unSortedProducts={unSortedProducts} 
            sortedProducts={sortedProducts}
            addToCartHandler={addToCartHandler}
            cartItems={cartItems}
          />
        ) : (
          <div
            className={`spinner-border position-absolute top-50 start-50 ${styles.spinner}`}
            role="status"
          ></div>
        )}
      </div>
      {/* Footer agregado */}
      <div className="text-center">
        <h2 className="mb-3">¡No te pierdas nuestras ofertas!</h2>
        <a 
          href="https://wa.me/584141521511" // Reemplaza con tu número de WhatsApp
          className="btn btn-primary mb-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos por WhatsApp
        </a>
      </div>
    </div>
  );
}