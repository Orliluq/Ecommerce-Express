import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useParams } from 'react-router-dom';
/* import Ratings from '../components/Ratings'; */
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
 /*  const [updateRating, setUpdateRating] = useState(0); */

  const [mainImage, setMainImage] = useState('');
  const currentProduct = filteredProductArray[0];
  const [updateReferenceCode, setUpdateReferenceCode] = useState('');
  const [updateModel, setUpdateModel] = useState('');
  const [updateCategory, setUpdateCategory] = useState('');

  // Si no se encuentra el producto actual, lo redireccionará a la home page
  if (!currentProduct) {
    return <Navigate to="/home" />;
  }

  const {
    title,
    description,
    price,
    ratings,
    img,
    id,
    referenceCode,
    model,
    category,
    images,
  } = currentProduct;
  
  const productToBeUpdated = {
    id: currentProduct.id,
    img: currentProduct.img,
    title: updateName || currentProduct.title,
    description: updateDescription || currentProduct.description,
    price: updatePrice || currentProduct.price,
    referenceCode: updateReferenceCode || currentProduct.referenceCode,
    model: updateModel || currentProduct.model,
    category: updateCategory || currentProduct.category,
   /*  ratings: updateRating, */
  };
  
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleAddToCart = (currentProduct) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id === currentProduct.id
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
      currentProduct.key = id;
      currentProduct.qty = 1;
      addToCartHandler(currentProduct);
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

  const handleUpdateButton = (productToBeUpdated) => {
    updateProductHandler(productToBeUpdated);
    toast.success('Actualizado exitosamente!', {
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
    toast.success('Eliminado exitosamente!', {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#363636',
        color: '#fff',
      },
    });
  };

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    
      <div
        className={`card mb-5 d-flex justify-content-center  mx-auto my-4 p-2 shadow-lg ${styles.cardWrapper}`}
      >
        <div className="row g-0">
          <div className="col-md-3 mt-4">
            <img
              src={mainImage || img}
              className="img-fluid rounded-1 "
              alt="product-img"
            />
          {/* Small carousel for product images */}
           <div className="d-flex mt-3">
        {images && images.length > 0 ? (
          images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product img ${index}`}
            className={`img-thumbnail ${styles.smallImg}`}
            onClick={() => handleImageClick(image)}
          />
        ))
      ) : (
        <p>No images available</p> // Un mensaje o un contenido alternativo
      )}
    </div>
          </div>
          <div className="col-md-3 rounded p-2 bg- text-center text-md-start">
            <div className="card-body">
              {edit ? (
        <div className="d-flex flex-column justify-content-between bg-between mt-2" style={{ height: '300px' }}>
          <input
            type="text"
            placeholder={`${title}`}
            className="mt-2 fs-6 p-1 form-control"
            required
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <input
            type="number"
            placeholder={`${price}`}
            min="0"
            className="fs-6 p-1 form-control"
            required
            onChange={(e) => setUpdatePrice(e.target.value)}
          />
          <input
            type="text"
            placeholder={`${referenceCode}`}
            className="mt-2 fs-6 p-1 form-control"
            required
            onChange={(e) => setUpdateReferenceCode(e.target.value)}
          />
          <input
            type="text"
            placeholder={`${model}`}
            className="mt-2 fs-6 p-1 form-control"
            required
            onChange={(e) => setUpdateModel(e.target.value)}
          />
          <input
            type="text"
            placeholder={`${category}`}
            className="mt-2 fs-6 p-1 form-control"
            required
            onChange={(e) => setUpdateCategory(e.target.value)}
          />
                  {/* <label htmlFor="rating" className="fw-semibold text-muted">
                    Rating
                  </label> */}
                  {/* <input
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
                  ></input> */}
                </div>
              ) : (
                <>
                  <h4 className="card-title ">{title}</h4>
                  <h4>
                    <small>$</small>
                    {price}
                    </h4>
                  <p>Código de referencia: {referenceCode}</p>
                  <p>Modelo: {model}</p>
                  <p>Categoría: {category}</p>
                  {/* <div className="my-3">
                    <Ratings ratings={ratings} />
                  </div> */}
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
                      className="btn btn-outline-primary mx-1"
                      onClick={() => handleUpdateButton(productToBeUpdated)}
                    >
                      Actualizar
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={handleEdit}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="card-text">{description}</p>
                  <div className="btn-container d-flex justify-content-between mt-5">
                    <div
                      className="btn btn-outline-success"
                      onClick={() => handleAddToCart(currentProduct)}
                    >
                      <i className="fa fa-cart-plus mr-4"></i> Agregar al carrito
                    </div>
                    <div className="btnWrapper">
                      <button
                        className={`${styles.editBtn}`}
                        onClick={handleEdit}
                      >
                        <img
                          src="/pen.png"
                          alt="p-2"
                          className={styles.btnImg}
                        />
                      </button>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleDeleteProduct(currentProduct)}
                      >
                        <img
                          src="/delete.png"
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
  );
}