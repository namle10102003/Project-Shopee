import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiFillStar } from 'react-icons/ai'; // Import icon for star rating
import productImage from '../assets/images/product.png';
import '../css/listProduct/listProductPage.css';

const products = [
  { id: 1, name: "Product 1", image: productImage, price: "$10.00", sold: 1600, rating: 4 },
  { id: 2, name: "Product 2", image: productImage, price: "$20.00", sold: 220, rating: 3 },
  { id: 3, name: "Product 3", image: productImage, price: "$30.00", sold: 10000, rating: 5 },
  { id: 4, name: "Product 4", image: productImage, price: "$40.00", sold: 1800, rating: 4 },
  { id: 5, name: "Product 5", image: productImage, price: "$50.00", sold: 250, rating: 3 },
  { id: 6, name: "Product 6", image: productImage, price: "$60.00", sold: 3000, rating: 4 },
  { id: 7, name: "Product 7", image: productImage, price: "$70.00", sold: 20000, rating: 5 },
  { id: 8, name: "Product 8", image: productImage, price: "$80.00", sold: 80000, rating: 4 },
  { id: 9, name: "Product 9", image: productImage, price: "$90.00", sold: 20, rating: 1 },
  { id: 10, name: "Product 10", image: productImage, price: "$100.00", sold: 50, rating: 2 },
  { id: 11, name: "Product 11", image: productImage, price: "$110.00", sold: 70000, rating: 5 },
  { id: 12, name: "Product 12", image: productImage, price: "$120.00", sold: 1900, rating: 4 },
];

function ListProductPage() {
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
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <span className="text-muted">{product.sold} sold</span>
                  </div>
                  <div>
                    {Array.from(Array(product.rating).keys()).map((_, index) => (
                      <AiFillStar key={index} className="text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <div className="btn-group" role="group" aria-label="Page navigation">
          <button type="button" className="btn btn-primary">1</button>
          <button type="button" className="btn btn-primary">2</button>
          <button type="button" className="btn btn-primary">3</button>
          <button type="button" className="btn btn-primary">4</button>
          <button type="button" className="btn btn-primary">...</button>
        </div>
      </div>
    </div>
  );
}

export default ListProductPage;
