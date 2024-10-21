import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/home.module.css';

export default function (props) {
  const { unSortedProducts, sortedProducts, addToCartHandler, cartItems } =
    props;
  const [sortByPrice, setSortByPrice] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`btn btn-light border border-secondary border-2 rounded-pill fw-semibold position-absolute  ${styles.sortBtn}`}
      >
        <span onClick={() => setSortByPrice(true)}>Sort by price</span>
        {sortByPrice ? (
          <i
            className="fa-regular fa-circle-xmark ms-2 "
            onClick={() => setSortByPrice(false)}
          ></i>
        ) : null}
      </button>
      {sortByPrice
        ? sortedProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
              cartItems={cartItems}
            />
          ))
        : unSortedProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
              cartItems={cartItems}
            />
          ))}
    </>
  );
}
