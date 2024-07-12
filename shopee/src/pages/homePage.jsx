import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import caroselone from '../assets/images/caroselone.png';
import caroseltwo from '../assets/images/caroseltwo.png';
import caroselthree from '../assets/images/caroselthree.png';
import '../css/home/home.css';


const HomePage = () => {
    return (
        <div>
        {/* Header */}
       

        {/* Carasel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={caroselone} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={caroseltwo} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={caroselthree} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>



        {/* Footer */}
        </div>


    );
};

export default HomePage;
