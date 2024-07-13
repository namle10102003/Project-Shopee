// cartPage.js

import { getCart, removeFromCart } from '../components/core/addtocart';
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
            alert('Bạn cần đăng nhập để xem giỏ hàng.');
            navigate('/login');
            return;
        }

        if (currentUser.id.toString() !== userId) {
            alert('Bạn không có quyền truy cập giỏ hàng này.');
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

    if (!isAuthorized) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cart-page'>
            <div className='cart-content'>
                <h1>Giỏ hàng của tôi</h1>
                <div>
                    <ul className='cart-list'>
                        {cartData.map(item => (
                            <li key={item.productId} className='cart-item'>
                                <div className='cart-item-info'>
                                    <Link to={`/product/${item.productId}`} className='cart-item-name text-primary'>{item.productName}</Link>
                                    <span className='cart-item-quantity text-primary'>Số lượng: {item.quantity}</span>
                                    <span className='cart-item-price text-primary'>Giá tiền: {item.totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <button onClick={() => handleRemoveFromCart(item.productId)} className='cart-item-remove'>Xóa</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CartPage;