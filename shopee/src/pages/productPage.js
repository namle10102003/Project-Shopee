import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productPage.css';
import '../styles/searchingPage.css';
import { displayItem } from '../components/core/searchEngine.js';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    var start = Math.floor(Math.random() * 100);
    
    useEffect(() => {
        fetch('/template.json')
            .then(response => response.json())
            .then(data => {
                const product = data.find(item => item.ID === parseInt(id));
                setProduct(product);
            })
            .catch(error => console.error('Error fetching product data:', error));
    }, [id]);
    
    useEffect(() => {
        fetch('/template.json')
        .then(response => response.json())
        .then(data => {
            displayItem(data.slice(start, start + 5), 'product-page__upsell');
        })
        .catch(error => console.error('Error loading products', error));
    }, [start]);
    
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product'>
            <div className='grid wide'>
                <div className='row product-view'>
                    <div className='col l-5 product-view__left'>
                        {/* Slider */}
                        <img src={product.image} alt={product.title} />
                        <div className='row'>
                            <div className='col l-6 product-view__left-desc'>
                                <p>Chia sẻ:</p> 
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className='col l-6 product-view__left-desc'>
                                <i class="fa-regular fa-heart"></i>
                                <p>Đã thích ({product.sold})</p>
                            </div>
                        </div>
                    </div>
                    <div className='col l-7'>
                        <h1 className='grid'>{product.title}</h1>
                        <div className='product-view__parameter'>
                            <p>{product.view} Lượt xem</p>
                            <p>{product.sold} Đã bán</p>
                            <a>Tố cáo</a>
                        </div>
                        <h1 className='product-view__price'>{product.price} VND</h1>
                        <div className='product-view__quantity'>
                            <p>Số lượng</p>
                            <input type="number" min={1}></input>
                            <p>{product.remaining} sản phẩm có sẵn</p>
                        </div>
                        <div className='product-view__btn'>
                            <button>
                            <i class="fas fa-shopping-cart"></i>
                            <p>Thêm Vào Giỏ Hàng</p>
                            </button>
                            <a>
                                <p>Mua Ngay</p>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='product-page__upsell-container'>
                    <h1>Các sản phẩm khác</h1>
                    <div id="product-page__upsell" className="row section-products">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
