import qrImg from '../../../assets/images/qr_code.png';
import appstoreImg from '../../../assets/images/app_store.png';
import ggplayImg from '../../../assets/images/google_play.png';
import payment from '../../../assets/images/payment.png';
import delivery from '../../../assets/images/delivery.png';
import appGallery from '../../../assets/images/appGallery.png';
import policy from '../../../assets/images/policy.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='grid wide footer-top'>
                <div className='row'>
                    <div className='col l-2-4'>
                        <h2 className='grid'>CHĂM SÓC KHÁCH HÀNG</h2>
                        <a className='grid'>Trung Tâm Trợ Giúp</a>
                        <a className='grid'>Shopee Blog</a>
                        <a className='grid'>Shopee Mall</a>
                        <a className='grid'>Hướng Dẫn Mua Hàng</a>
                        <a className='grid'>Hướng Dẫn Bán Hàng</a>
                        <a className='grid'>Thanh Toán</a>
                        <a className='grid'>Shopee Xu</a>
                        <a className='grid'>Vận Chuyển</a>
                        <a className='grid'>Trả Hàng & Hoàn Tiền</a>
                        <a className='grid'>Chăm Sóc Khách Hàng</a>
                        <a className='grid'>Chính Sách Bảo Hành</a>
                    </div>
                    <div className='col l-2-4'>
                        <h2 className='grid'>VỀ SHOPEE</h2>
                            <a className='grid'>Giới Thiệu Về Shopee Việt Nam</a>
                            <a className='grid'>Tuyển Dụng</a>
                            <a className='grid'>Điều Khoản Shopee</a>
                            <a className='grid'>Chính Sách Bảo Mật</a>
                            <a className='grid'>Chính Hãng</a>
                            <a className='grid'>Kênh Người Bán</a>
                            <a className='grid'>Flash Sales</a>
                            <a className='grid'>Chương Trình Tiếp Thị Liên Kết Shopee</a>
                            <a className='grid'>Liên Hệ với Truyền Thông</a>
                    </div>
                    <div className='col l-2-4'>
                        <h2>THANH TOÁN</h2>
                        <img src={payment} alt="payment" className='grid'></img>
                        <h2>ĐƠN VỊ VẬN CHUYỂN</h2>
                        <img src={delivery} alt="delivery" className='grid'></img>
                    </div>
                    <div className='col l-2-4'>
                        <h2>THEO DÕI CHÚNG TÔI TRÊN</h2>
                        <div>
                            <a className='grid'>
                                <i class="fa-brands fa-facebook"></i>
                                Facebook
                            </a>
                            <a className='grid'>
                                <i class="fa-brands fa-instagram"></i>
                                instagram
                            </a>
                            <a className='grid'>
                                <i class="fa-brands fa-linkedin"></i>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className='col l-2-4'>
                        <h2>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h2>
                        <div className='row'>
                            <div className='col l-6'>
                                <img src={qrImg} alt="QR Code" className='grid footer__download-app'></img>
                            </div>
                            <div className='col l-6'>
                                <img src={appstoreImg} alt="App Store" className='grid footer__download-app'></img>
                                <img src={ggplayImg} alt="Google Play" className='grid footer__download-app'></img>
                                <img src={appGallery} alt="App Gallery" className='grid footer__download-app'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid wide footer-top__sub'>
                <div className='row'>
                    <div className='col l-4'>
                        <p>© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
                    </div>
                    <div className='col l-8'>
                        <a>Quốc gia & Khu vực: </a>
                        <a>Singapore</a>
                        <a>Indonesia</a>
                        <a>Thái Lan</a>
                        <a>Malaysia</a>
                        <a>Việt Nam</a>
                        <a>Philippines</a>
                        <a>Brazil</a>
                        <a>Mêxico</a>
                        <a>Colombia</a>
                        <a>Chile</a>
                        <a>Đài Loan</a>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='footer-bottom__policy'>
                    <a>CHÍNH SÁCH BẢO MẬT</a>
                    <a>QUY CHẾ HOẠT ĐỘNG</a>
                    <a>CHÍNH SÁCH VẬN CHUYỂN</a>
                    <a>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                </div>

                <div className='footer-bottom__certificate'>
                <img src={policy} alt="policy" className='policy-img'></img>
                <p>Công ty TNHH Shopee</p>
                </div>

                <div className='footer-bottom__details'>
                    <p>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
                    <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
                    <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                    <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
