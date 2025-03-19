import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaUser, FaShoppingCart, FaCreditCard, FaLock, FaComment, FaHeart, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./SidebarMenu.css"; // Import file CSS bên dưới

const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <ListGroup variant="flush" className="shadow-sm">
        <ListGroup.Item action as={Link} to="/user_profile">
          <FaUser className="icon" /> <span className="text">Tài khoản</span>
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/orderhistory">
          <FaShoppingCart className="icon" /> <span className="text">Lịch sử đơn hàng</span>
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/paymenthistory">
          <FaCreditCard className="icon" /> <span className="text">Lịch sử giao dịch</span>
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaLock className="icon" /> <span className="text">Mật khẩu và bảo mật</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SidebarMenu;
