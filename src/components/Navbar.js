import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default function Navbar(props) {
  const { cartItems } = props;
  return (
    <nav className={`navbar ${styles.navbar} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className={`${styles.logoImg} d-inline-block`}
            src="/sharing.png"
            alt="logo"
          />
          <span
            className={`ms-2 text-dark ${styles.siteName} d-none d-sm-inline-block `}
          >
            <strong className={`fs-4 ${styles.firstLetter}`}>   DLCA</strong>
            Tecnology
          </span>
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-5 d-flex flex-row">
          <li className="nav-item ms-sm-5 mx-3">
            <Link
              className={`btn btn-outline-primary fw-semibold text-dark`}
              to="/"
            >
              Nosotros
            </Link>
          </li>
          <li className="nav-item ms-sm-5 mx-2">
            <Link
              className={`btn btn-outline-primary fw-semibold text-dark`}
              aria-current="page"
              to="/home"
            >
              Productos
            </Link>
          </li>
          <li className="nav-item ms-sm-5 mx-3">
            <Link
              className={`btn btn-outline-primary fw-semibold text-dark`}
              aria-current="page"
              to="/addProduct"
            >
              Agregar producto
              <img
                src="/plus.png"
                alt=""
                className="ms-2"
                style={{ width: '20px' }}
              />
            </Link>
          </li>
          
        </ul>

        <div className=""></div>

        <div
          className={`cartWrapper  position-relative me-md-5 ${styles.cartWrapper}`}
        >
          <Link to="/cart">
            <img
              src="/shopping-cart.png"
              alt="cart"
            />
          </Link>
          {cartItems.length > 0 ? (
            <div
              className={`rounded-circle d-flex justify-content-center align-items-center position-absolute ${styles.itemsInCart}`}
            >
              <small className="text-light fw-semibold">
                {cartItems.length}
              </small>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}