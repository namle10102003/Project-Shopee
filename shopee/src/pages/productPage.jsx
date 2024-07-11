import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: "$10.00" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: "$20.00" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: "$30.00" },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/150", price: "$40.00" },
    { id: 5, name: "Product 5", image: "https://via.placeholder.com/150", price: "$50.00" },
    { id: 6, name: "Product 6", image: "https://via.placeholder.com/150", price: "$60.00" },
    { id: 7, name: "Product 7", image: "https://via.placeholder.com/150", price: "$70.00" },
    { id: 8, name: "Product 8", image: "https://via.placeholder.com/150", price: "$80.00" },
    { id: 9, name: "Product 9", image: "https://via.placeholder.com/150", price: "$90.00" },
    { id: 10, name: "Product 10", image: "https://via.placeholder.com/150", price: "$100.00" },
    { id: 11, name: "Product 11", image: "https://via.placeholder.com/150", price: "$110.00" },
    { id: 12, name: "Product 12", image: "https://via.placeholder.com/150", price: "$120.00" },
  ];
  
  function ProductPage() {
    return (
      <div className="container mt-4">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductPage;