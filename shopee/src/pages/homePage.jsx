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
            <div id="carouselExampleIndicators" className="carousel" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={caroselone} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={caroseltwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={caroselthree} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
                </div>




        {/* Footer */}
        </div>


    );
};

export default HomePage;
