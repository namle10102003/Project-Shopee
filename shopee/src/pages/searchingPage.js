import React, { useState, useEffect } from 'react';
import '../styles/searchingPage.css';
import { displayItem, handleSearch  } from '../components/core/searchEngine.js';
import Header from '../components/ui/commons/header.js';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 60;
    useEffect(() => {
        fetch('template.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                displayItem(data.slice(0, itemsPerPage), 'search-page__products');
            })
            .catch(error => console.error('Error loading products', error));
    }, []);

    const handleInputChange = (query, page) => {
        setSearchQuery(query)
        fetch('template.json')
            .then(response => response.json())
            .then(data => {
                handleSearch(query, data, page, itemsPerPage, setProducts, setCurrentPage, displayItem, 'search-page__products');
            })
            .catch(error => console.error('Error loading products', error));
    };

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const changePage = (page) => {
        setCurrentPage(page);
        displayItem(products.slice((page - 1) * itemsPerPage, page * itemsPerPage), 'search-page__products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='search-page'>
            <Header onSearch={handleInputChange} />
            <div className='search-page__body'>
                <div className='grid wide'>
                <h2>Kết quả tìm kiếm cho từ khóa "{searchQuery}"</h2>
                    <div id="search-page__products" className="row section-products">
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
    );
};

export default HomePage;