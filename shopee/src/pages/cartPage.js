// cartPage.js

import { getCart, removeFromCart, updateCartItemQuantity } from '../components/core/addtocart';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/cartPage.css';

function CartPage() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (!currentUser) {
            alert('Vui lòng đăng nhập trước!');
            navigate('/login');
            return;
        }

        if (currentUser.id.toString() !== userId) {
            navigate(`/cart/${currentUser.id}`);
            return;
        }

        setIsAuthorized(true);
        const cartItems = getCart(userId);
        // Tính lại totalPrice cho từng sản phẩm trong giỏ hàng
        const updatedCartItems = cartItems.map(item => ({
            ...item,
            totalPrice: item.price * item.quantity // tính lại totalPrice dựa trên price và quantity
        }));
        setCartData(updatedCartItems);
    }, [userId, navigate]);

    function handleRemoveFromCart(productId) {
        removeFromCart(productId, userId);
        setCartData(cartData => cartData.filter(item => item.productId !== productId));
    }

    function handleQuantityChange(productId, newQuantity) {
        if (newQuantity < 1) {
            handleRemoveFromCart(productId);
            return;
        }    
        const updatedCart = updateCartItemQuantity(productId, userId, newQuantity);
        setCartData(updatedCart);
    }
    
    if (!isAuthorized) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-page'>
            <div className='grid wide'>
            <div className='cart-content'>
                <h1 className='cart-content__header'>Giỏ hàng</h1>
                    <div className='row cart-content__type'>
                        <p className='col-4'>Sản Phẩm</p>
                        <p className='col-2'>Đơn Giá</p>
                        <p className='col-2'>Số Lượng</p>
                        <p className='col-2'>Số Tiền</p>
                        <p className='col-2'>Thao Tác</p>
                    </div>
                    <ul className='cart-list grid wide'>
                        {cartData.map(item => (
                            <li key={item.productId} className='cart__item row'>
                                <Link to={`/product/${item.productId}`} className='cart__item-intro col-4'>
                                    <img src={item.image} alt={item.productName} className='col-4'/>
                                    <p className='col-8'>{item.productName}</p>
                                </Link>
                                <span className='col-2'>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                    <div className='cart-item_quantity col-2'>
                                        <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}>+</button>
                                    </div>
                                    <span className='cart__item-total col-2'>{item.totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                <p onClick={() => handleRemoveFromCart(item.productId)} className='cart__item-remove col-2'>Xóa</p>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                <div>
                </div>
        </div>
    );
}

export default CartPage;