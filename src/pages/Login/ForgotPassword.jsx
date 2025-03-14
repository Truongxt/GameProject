import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay làm mờ nền */}
      <div className="overlay"></div>

      <Container className="auth-container">
        <div className="auth-box">
          <div className="close-btn-wrapper">
            <button className="close-btn" onClick={() => navigate("/")}>  
              <AiOutlineClose />
            </button>
          </div>

          <div className="form-container">
            <h2 className="auth-title">Đặt lại mật khẩu</h2>
            <p className="auth-desc">
              Bạn vui lòng hoàn tất các thông tin xác thực bên dưới để chúng tôi đặt lại mật khẩu cho tài khoản của bạn.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Email hoặc tên đăng nhập" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Mật khẩu mới" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Nhập lại mật khẩu mới" required />
              </Form.Group>
              <Button className="w-100 btn-login" type="submit">Đặt lại mật khẩu</Button>
            </Form>

            <p className="mt-3">
              <Link to="/login" style={{ color: 'blue' }}> Quay lại trang đăng nhập</Link>
            </p>
          </div>

          <div className="image-container">
            <img 
              src="https://cdn.divineshop.vn/static/c92dc142033ca6a66cda62bc0aec491b.svg" 
              alt="Illustration" 
              className="login-image" 
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
