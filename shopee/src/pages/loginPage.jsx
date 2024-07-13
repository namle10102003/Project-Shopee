// loginPage.jsx

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import facebookIcon from '../assets/images/logoFb.png';
import googleIcon from '../assets/images/logoGg.png';
import '../styles/login.css';
import accounts from '../db.json';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const searchLinkRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        const account = accounts.find(acc => acc.username === username && acc.password === password);
        if (account) {
            localStorage.setItem('loggedInUser', JSON.stringify(account));
            navigate('/');
        } else {
            setErrorMessage('Tài khoản hoặc mật khẩu không chính xác.');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchLinkRef.current.click();
        }
    };

    return (
        <div>
            <nav className="navbar navbar-light nav-login">
                <div className="container">
                    <a className="navbar-brand" href="#" style={{ display: 'flex' }}>
                        <img src={logo} alt="" className=" " />
                        <h1>Đăng Nhập</h1>
                    </a>
                </div>
            </nav>
            <div className="bodylogin">
                <div className="loginform">
                    <h2 className="text-center login-element login-header">Đăng nhập</h2>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="form-group login-element">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <div className="form-group login-element">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <button className="btn-login btn-block login-element" ref={searchLinkRef} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <div className="d-flex justify-content-between mt-2 login-element login-sub">
                    <a href="#">Quên mật khẩu</a>
                        <a href="#">Đăng nhập với SMS</a>
                    </div>

                    <div className="text-center my-3 login-element login-or">
                        <hr className="horizontal-line" />
                        <span className="or-text">HOẶC</span>
                        <hr className="horizontal-line" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <button className="btn-facebook btn-block login-element">
                            <img src={facebookIcon} alt="Facebook" width="20" /> Facebook
                        </button>
                        <button className="btn-google btn-block login-element">
                            <img src={googleIcon} alt="Google" width="20" /> Google
                        </button>
                    </div>
                    <div className="text-center mt-3 login-element login-footer">
                        <span>Bạn mới biết đến Shopee? <a href="#">Đăng ký</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;