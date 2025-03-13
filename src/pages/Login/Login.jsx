import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Login.css";

const Login = () => {
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
          <div className="form-container">
            <h2 className="auth-title">
              <span className="active">Đăng nhập</span> | 
              <Link to="/register" className="inactive"> Đăng ký</Link>
            </h2>

            <p className="auth-desc">
              Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Email hoặc tên đăng nhập" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Mật khẩu" required />
              </Form.Group>
              <div className="forgot-password">
                <Link to="/forgot-password">Bạn quên mật khẩu?</Link>
              </div>
              <Button className="w-100 btn-login" type="submit">Đăng nhập</Button>
            </Form>

            <div className="divider">Hoặc đăng nhập bằng</div>

            <div className="social-login mt-3">
              <button className="social-btn google">
                <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" /> Google
              </button>
              <button className="social-btn facebook">
                <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" /> Facebook
              </button>
            </div>
          </div>

          <div className="image-container">
            <img 
              src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" 
              alt="Illustration" 
              className="login-image" 
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
