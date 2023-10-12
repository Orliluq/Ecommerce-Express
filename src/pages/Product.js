import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useParams } from 'react-router-dom';
import Ratings from '../components/Ratings';
import styles from '../styles/product.module.css';

export default function Product(props) {
  // extrayendo la identificación del producto por params
  const params = useParams();
  const productId = params.id;

  const {
    allProducts,
    addToCartHandler,
    updateProductHandler,
    deleteProductHandler,
    cartItems,
  } = props;


  // extrayendo el producto actual de la matriz de todos los productos
  const filteredProductArray = allProducts.filter(
    (product) => product.id === Number(productId)
  );

  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updatePrice, setUpdatePrice] = useState(0);
  const [updateRating, setUpdateRating] = useState(0);

  const currentProduct = filteredProductArray[0];

  // Si no se encuentra el producto actual, lo redireccionará a la home page
  if (!currentProduct) {
    return <Navigate to="/" />;
  }

  const { title, description, price, ratings, img, id } = currentProduct;
  
  const productToBeUpdated = {
    id: currentProduct.id,
    img: currentProduct.img,
    title: updateName,
    description: updateDescription,
    price: updatePrice,
    ratings: updateRating,
  };
  
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleAddToCart = (currentProduct) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id === currentProduct.id
    );
    if (filteredCartItems.length > 0) {
      toast.error('Product already in cart', {
        position: 'top-center',
        style: {
          borderRadius: '10px',
          background: '#363636',
          color: '#fff',
        },
      });
      return null;
    } else {
      currentProduct.key = id;
      currentProduct.qty = 1;
      addToCartHandler(currentProduct);
      toast.success('Added to cart', {
        position: 'top-center',
        style: {
          borderRadius: '10px',
          background: '#363636',
          color: '#fff',
        },
      });
    }
  };

  const handleUpdateButton = (productToBeUpdated) => {
    updateProductHandler(productToBeUpdated);
    toast.success('Updated successfully!', {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#363636',
        color: '#fff',
      },
    });
  };

  const handleDeleteProduct = (currentProduct) => {
    deleteProductHandler(currentProduct);
    toast.success('Deleted successfully!', {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#363636',
        color: '#fff',
      },
    });
  };

  return (
    <>
      <div
        className={`card mb-3 d-flex justify-content-center  mx-auto my-5 p-2 shadow-lg ${styles.cardWrapper}`}
      >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={img} className="img-fluid rounded " alt="product-img" />
          </div>
          <div className="col-md-3 rounded p-2 bg- text-center text-md-start">
            <div className="card-body">
              {edit ? (
                <div
                  className="d-flex flex-column justify-content-between bg-between mt-2"
                  style={{ height: '200px' }}
                >
                  <input
                    type="text"
                    placeholder={`${title}`}
                    className="fs-4 p-1 form-control"
                    required
                    onChange={(e) => {
                      setUpdateName(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    placeholder={`${price}`}
                    min="0"
                    className="fs-4 p-1 form-control"
                    required
                    onChange={(e) => {
                      setUpdatePrice(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="rating" className="fw-semibold text-muted">
                    Rating
                  </label>
                  <input
                    id="rating"
                    type="number"
                    placeholder={`${ratings}`}
                    className="p-2 form-control"
                    min="0"
                    max="5"
                    required
                    onChange={(e) => {
                      setUpdateRating(e.target.value);
                    }}
                  ></input>
                </div>
              ) : (
                <>
                  <h4 className="card-title ">{title}</h4>
                  <h4>
                    <small>₹</small>
                    {price}
                  </h4>
                  <div className="my-3">
                    <Ratings ratings={ratings} />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-md-6 rounded  p-2">
            <div className="card-body ">
              {edit ? (
                <div className="d-flex flex-column ">
                  <textarea
                    className="my-2 p-2 form-control"
                    placeholder={`${description}`}
                    rows="8"
                    cols="20"
                    required
                    onChange={(e) => {
                      setUpdateDescription(e.target.value);
                    }}
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-warning mx-1"
                      onClick={() => handleUpdateButton(productToBeUpdated)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={handleEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="card-text">{description}</p>
                  <div className="btn-container d-flex justify-content-between mt-5">
                    <div
                      className="btn btn-warning"
                      onClick={() => handleAddToCart(currentProduct)}
                    >
                      <i className="fa fa-cart-plus mr-2"></i> Add to cart
                    </div>
                    <div className="btnWrapper">
                      <button
                        className={`${styles.editBtn}`}
                        onClick={handleEdit}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/420/420181.png"
                          alt=""
                          className={styles.btnImg}
                        />
                      </button>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleDeleteProduct(currentProduct)}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                          alt=""
                          className={styles.btnImg}
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
