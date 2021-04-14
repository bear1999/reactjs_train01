import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Social Mini</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    <Link to="/dang-ky">Đăng ký</Link>
                    <Link to="/thong-tin-ca-nhan">Thông tin cá nhân</Link>
                    <Link to="/dang-nhap">Đăng nhập</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;