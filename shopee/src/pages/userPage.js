import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import accounts from '../db.json'; 
import '../styles/userPage.css'
import avatarImg from '../assets/images/avatar.jpg';

const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = accounts.find(acc => acc.id === parseInt(id));
        setUser(user);
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='user-page'>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-3'>
                        <div className='user-page__avatar'>
                            <img src={avatarImg} alt="avatar"></img>
                            <p>{user.username}</p>
                        </div>
                        <div className='user-page__title'>
                            <div className='user-page__title-item'>
                                <i class="fa-regular fa-user"></i>
                                <p>Tài Khoản Của Tôi</p>
                            </div>
                            <div className='user-page__title-item'>
                                <a>
                                    <i class="fas fa-shopping-cart"></i>
                                    <p>Giỏ Hàng</p>
                                </a>
                            </div>
                            <div className='user-page__title-item'>
                                <i class="fa-solid fa-list"></i>
                                <p>Đơn Mua</p>
                            </div>
                        </div>
                    </div>
                    <div className='col l-9 user-page__profile'>
                        <div className='user-page__profile-header'>
                            <h2>Hồ Sơ Của Tôi</h2>
                            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>
                        <div className='row user-page__profile-body'>
                            <div className='col l-3 user-page__profile-body-left' >
                            <p>Tên đăng nhập</p>
                            <p>Tên</p>
                            <p>Email</p>
                            <p>Số điện thoại</p>
                            <p>Ngày sinh</p>

                            </div>
                            <div className='col l-9'>
                            <p>{user.username}</p>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.birthday}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
