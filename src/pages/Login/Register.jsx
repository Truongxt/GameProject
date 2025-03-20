import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Import file CSS để tùy chỉnh thêm

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-white rounded-3 shadow-lg p-4 position-relative w-75">
          <div className="d-flex justify-content-end">
            <Button variant="link" className="text-dark p-0 border-0" onClick={() => navigate("/")}> 
              <AiOutlineClose size={24} />
            </Button>
          </div>
          <Row className="align-items-center">
            <Col md={7} className="pe-md-4">
              <h2 className="fw-bold fs-4">
                <Link to="/login" className="text-secondary text-decoration-none hover-underline">Đăng nhập</Link> 
                <span className="text-dark ms-4 hover-underline"> Đăng ký</span>
              </h2>
              <p className="text-muted mb-4">Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.</p>
              <Form>
              {[
                  { name: "fullname", placeholder: "Họ và tên", type: "text" },
                  { name: "email", placeholder: "Email", type: "email" },
                  { name: "username", placeholder: "Tên đăng nhập", type: "text" },
                  { name: "password", placeholder: "Mật khẩu", type: "password" },
                  { name: "confirmPassword", placeholder: "Nhập lại mật khẩu", type: "password" },
                  { name: "phone", placeholder: "Số điện thoại (không bắt buộc)", type: "text" },
                  { name: "referral", placeholder: "Mã giới thiệu (nếu có)", type: "text" }
                ].map((field, index) => (
                  <Form.Group key={index} className="mb-3 floating-label-group">
                    <Form.Control
                      type={field.type}
                      className="form-control-custom"
                      placeholder=" "
                      required={field.name !== "phone" && field.name !== "referral"}
                    />
                    <Form.Label className="floating-label">{field.placeholder}</Form.Label>
                  </Form.Group>
                ))}

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Tôi đồng ý nhận thông tin marketing mới từ Gamekey Shop." />
                </Form.Group>
                <Button className="w-100 btn-primary" type="submit">Tạo tài khoản</Button>
              </Form>
              <p className="text-center text-muted mt-2" style={{ fontSize: "12px" }}>
                Khi bấm Tạo tài khoản, bạn đã đồng ý với Điều khoản dịch vụ của Gamekey Shop
              </p>
            </Col>
            <Col md={5} className="text-center">
              <img
                src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg"
                alt="Illustration"
                className="img-fluid"
                style={{ maxWidth: "350px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Register;