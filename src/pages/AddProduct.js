import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddProduct(props) {
  const { addProduct, allProducts } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: allProducts.length + 1,
      title: name,
      description,
      price,
      ratings: rating,
      img: imageUrl,
    };
    addProduct(product);
    toast.success('Product added', {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#363636',
        color: '#fff',
      },
    });
  };

  return (
    <div className="container mt-4 col-md-4 border p-3 rounded  shadow-lg">
      <div className="d-flex justify-content-center my-2">
        <h3>Add product</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            required
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label" required>
            Rating
          </label>
          <input
            type="number"
            min="0"
            max="5"
            className="form-control"
            id="rating"
            placeholder="1 to 5"
            required
            onChange={(e) => setRating(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="img"
            required
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-success "
            style={{ width: '50%' }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
