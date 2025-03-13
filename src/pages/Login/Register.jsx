import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container className="auth-container">
      <div className="auth-box">
        <div className="close-btn-wrapper">
          <button className="close-btn" onClick={() => navigate("/")}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="content-wrapper">
          <div className="form-container" style={{ flex: 1.2, paddingRight: '30px' }}>
            <h2 className="auth-title">
              <Link to="/login" className="inactive">Đăng nhập</Link> |
              <span className="active"> Đăng ký</span>
            </h2>

            <p className="auth-desc">
              Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Họ và tên" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Tên đăng nhập" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Mật khẩu" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Nhập lại mật khẩu" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Số điện thoại (không bắt buộc)" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Mã giới thiệu (nếu có)" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tôi đồng ý nhận thông tin marketing mới từ Gamekey Shop." />
              </Form.Group>

              <Button className="w-100 btn-login" type="submit">Tạo tài khoản</Button>
            </Form>
            <p className="text-center" style={{ fontSize: '12px', marginTop: '10px' , color: '#666' }}>
              Khi bấm Tạo tài khoản, bạn đã đồng ý với <a href="/terms">Điều khoản dịch vụ của Gamekey Shop </a> 
            </p>
          </div>

          <div className="image-container" style={{ flex: 1 }}>
            <img 
              src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg" 
              alt="Illustration" 
              className="login-image" 
              style={{ width: '350px' }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
