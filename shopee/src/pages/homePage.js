import React, { useState, useEffect } from 'react';
import '../styles/homePage.css';
import '../styles/searchingPage.css';
import { displayItem } from '../components/core/searchEngine.js';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 60;

    useEffect(() => {
        fetch('template.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                displayItem(data.slice(0, itemsPerPage), 'home-page__products');
            })
            .catch(error => console.error('Error loading products', error));
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const changePage = (page) => {
        setCurrentPage(page);
        displayItem(products.slice((page - 1) * itemsPerPage, page * itemsPerPage), 'home-page__products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='home-page'>
            <div>
                <h1>home-page__slider</h1>
            </div>
            <div className='home-page__body'>
                <div className='grid wide'>
                    <div className='home-page-body__container'>
                        <h1>Gợi ý hôm nay</h1>
                        <div id="home-page__products" className="row section-products">
                        </div>
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => changePage(i + 1)}
                                    className={currentPage === i + 1 ? 'active' : ''}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;