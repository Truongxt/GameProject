import { Container, Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang

    if (email && password) {
      // Giả lập đăng nhập thành công
      localStorage.setItem("auth", "true"); // Lưu trạng thái đăng nhập
      navigate("/sidebarmenu"); // Chuyển hướng về trang chủ
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
      <Container className="bg-white p-4 rounded shadow-lg position-relative" style={{ maxWidth: "900px" }}>
        <button className="btn position-absolute top-0 end-0 m-2" onClick={() => navigate("/")}> 
          <AiOutlineClose size={24} />
        </button>
        <Row className="align-items-center">
          <Col md={6} className="p-3">
            <h2 className="fw-bold mb-3 fs-4">
              <span className="text-dark hover-underline">Đăng nhập</span>
              <Link to="/register" className="text-secondary ms-4 text-decoration-none hover-underline">Đăng ký</Link>
            </h2>
            <p className="text-muted mb-4">Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4 floating-label-group">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className={email ? "active" : ""}>Email hoặc tên đăng nhập</label>
              </Form.Group>

              <Form.Group className="mb-3 floating-label-group">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className={password ? "active" : ""}>Mật khẩu</label>
              </Form.Group>

              <div className="mb-3">
                <Link to="/forgot-password" className="text-decoration-none hover-underline">Bạn quên mật khẩu?</Link>
              </div>
              <Button variant="primary" className="w-100" type="submit">Đăng nhập</Button>
            </Form>

            

            <div className="text-center text-muted my-3">Hoặc đăng nhập bằng</div>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="outline-danger" className="d-flex align-items-center m-1 ms-4">
                <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" width={20} className="me-2" /> Google
              </Button>
              <Button variant="outline-primary" className="d-flex align-items-center m-1">
                <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" width={20} className="me-2" /> Facebook
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img 
              src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg" 
              alt="Illustration" 
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
