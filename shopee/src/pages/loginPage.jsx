import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import facebookIcon from '../assets/images/logo.png';
import googleIcon from '../assets/images/logo.png';
import '../css/login/login.css';
import accounts from '../db.json'; // Đảm bảo đường dẫn đến tệp db.json là chính xác

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        if (!username || !password) {
            alert('Vui lòng nhập đầy đủ thông tin đăng nhập');
            return;
        }

        const account = accounts.find(acc => acc.username === username && acc.password === password);
        if (account) {
            alert('Đăng nhập thành công');
            // Chuyển hướng đến trang khác, ví dụ: trang chủ
            navigate('/');// Thay đổi '/home' thành URL của trang bạn muốn điều hướng đến
        } else {
            alert('Đăng nhập thất bại');
        }
    };

    return (
        <div>
            <nav className="navbar navbar-light nav-login">
                <div className="container">
                    <a className="navbar-brand" href="#" style={{ display: 'flex' }}>
                        <img src={logo} alt="" className=" " />
                        <p> Đăng Nhặp</p>
                    </a>
                </div>
            </nav>
            <div className="bodylogin">
                <div className="loginform">
                    <h2 className="text-center login-element">Đăng nhập</h2>
                    <div className="form-group login-element">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        />
                    </div>
                    <button className="btn-login btn-block login-element" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <div className="d-flex justify-content-between mt-2 login-element">
                        <a href="#">Quên mật khẩu</a>
                        <a href="#">Đăng nhập với SMS</a>
                    </div>

                    <div className="text-center my-3 login-element">
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
                    <div className="text-center mt-3 login-element">
                        <span>Bạn mới biết đến Shopee? <a href="#">Đăng ký</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
