import { Steps } from "antd";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ current }) => {
  const steps = [
    { title: "Giỏ hàng" },
    { title: "Xác nhận" },
    { title: "Thanh toán" },
  ];

  return (
    <Steps current={current}>
      {steps.map((step, index) => (
        <Steps.Step
          key={index}
          title={<span style={{ color: current >= index ? "#0d6efd" : "gray" }}>{step.title}</span>}
        />
      ))}
    </Steps>
  );
};

export default CheckoutSteps;