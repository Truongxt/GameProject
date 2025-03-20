import { Steps } from "antd";
import "./CheckoutSteps.css";

const CheckoutSteps = ({current}) => {
  return (
    <>
        <Steps
        current={current}
        items={[
            { title: <span style={{ color: current >= 0 ? "#0d6efd" : "gray" }}>Giỏ hàng</span> },
            { title: <span style={{ color: current >= 1 ? "#0d6efd" : "gray" }}>Xác nhận</span> },
            { title: <span style={{ color: current >= 2 ? "#0d6efd" : "gray" }}>Thanh toán</span> },
        ]}
        />
    </>
    
  );
};

export default CheckoutSteps;