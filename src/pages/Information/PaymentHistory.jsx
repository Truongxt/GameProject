import React from 'react';
import { Container, Form, Button, Table, Row, Col } from 'react-bootstrap';

const PaymentHistory = () => {
  return (
    <Container className="mt-4 p-3" style={{ maxWidth: '1000px', backgroundColor: '#fff' }}>
      <h4 className="fw-bold">Lịch sử giao dịch</h4>
      <p style={{ fontWeight: 'bold', color: '#000' }}>Hiển thị tất cả các giao dịch bạn dã thực hiện tại Gamekey Shop</p>
      
      <Form className="mb-3">
        <Row className="g-2">
          <Col md={2}>
            <Form.Control type="text" placeholder="Mô tả" size="sm" />
          </Col>
          <Col md={2}>
            <Form.Control type="number" placeholder="Số tiền từ" size="sm" />
          </Col>
          <Col md={2}>
            <Form.Control type="number" placeholder="Số tiền đến" size="sm" />
          </Col>
          <Col md={2}>
            <Form.Control type="date" placeholder="Từ ngày" size="sm" />
          </Col>
          <Col md={2}>
            <Form.Control type="date" placeholder="Đến ngày" size="sm" />
          </Col>
          <Col md={2}>
            <Button variant="primary" className="w-100 btn-sm">Lọc</Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="fw-bold">Thời gian</th>
            <th className="fw-bold">Mô tả</th>
            <th className="fw-bold">Số tiền</th>
            <th className="fw-bold">Số dư</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center text-dark">Không có dữ liệu</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentHistory;