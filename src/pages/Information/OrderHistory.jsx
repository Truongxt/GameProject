import React from 'react';
import { Container, Form, Button, Table, Row, Col } from 'react-bootstrap';

const OrderHistory = () => {
  return (
    <Container className="mt-4 p-3" style={{ maxWidth: '1000px', backgroundColor: '#fff' }}>
      <h4 className="fw-bold">Lịch sử đơn hàng</h4>
      <p style={{ fontWeight: 'bold', color: '#000' }}>Hiển thị thông tin các sản phẩm bạn đã mua tại Gamekey Shop</p>
      
      <Form className="mb-3">
        <Row className="g-2">
          <Col md={2}>
            <Form.Control type="text" placeholder="Mã đơn hàng" size="sm" />
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
            <th className="fw-bold">Mã đơn hàng</th>
            <th className="fw-bold">Sản phẩm</th>
            <th className="fw-bold">Tổng tiền</th>
            <th className="fw-bold">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="text-center text-dark">Không có dữ liệu</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderHistory;