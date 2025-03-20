import React from "react";
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Cart.css"
import CheckoutSteps from "./CheckoutSteps";
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from "react";
import momo from "./img/momo.png"
import vnpay from "./img/vnpay.png"
import mastercard from "./img/mastercard.png"
import visa from "./img/visa.png"
import scan from "../../assets/icons/svgs/scan.svg"
import { useCart } from "./CartContext";
import trashcan from "../../assets/icons/svgs/trashcan.svg"
import controller from "../../assets/icons/svgs/controller.svg"
import whitewallet from "../../assets/icons/svgs/wallet-white.svg"
import qrcode from "../../assets/icons/svgs/qrcode.svg"

const Cart = () => {
    const [current, setCurrent] = useState(0)
    const { cart, removeFromCart, updateQuantity, totalItems } = useCart();
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const nextStep = () =>{
        if(current < 2) setCurrent(current + 1);
    };

    const prevStep = () =>{
        if(current > 0) setCurrent(current - 1);
    };
    return(
        <>
        <div className="d-flex justify-content-center align-items-center mt-2">
           <div className="" style={{width: '80%', height: 'auto'}}>
                <CheckoutSteps current={current}></CheckoutSteps>
                <Container style={{height: "auto"}} className="text-center mt-2 bg-white d-flex rounded">
                <div className="col-8 p-4">
                    {totalItems === 0 ? (
                        // Giỏ hàng trống
                        <>
                        <h3 className="fw-bold">Giỏ hàng trống!</h3>
                        <p className="text-black fw-normal">Thêm sản phẩm vào giỏ và quay lại trang này để tiến hành thanh toán</p>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="tooltip-cart">Về trang chủ</Tooltip>}
                            trigger={["hover", "focus"]}
                        >
                        <Link to="/" style={{ display: "block", textAlign: "center" }}>
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
                                alt="Empty Cart"
                                width={150}
                                className="mb-3 mt-5"
                                style={{ cursor: "pointer", margin: 0, padding: 0 }} />
                        </Link>
                        </OverlayTrigger>
                        </>
                    ) : (
                        // Có hàng hiển thị sản phẩm
                        <div className="">
                            <div className="d-flex flex-row align-items-center">
                                <h3 className="fw-medium text-start fs-3">Giỏ hàng</h3>
                                <p className="text-black fw-normal fs-6 ms-1">({totalItems} sản phẩm)</p>
                            </div>
                            {cart.map((game) => (
                                <div key={game.id} className="d-flex border rounded p-2 mb-3">
                                    <Image src={game.thumbnail} alt={game.title} width={210} height={120} className="rounded" />
                                    <div className="h-100 w-100">
                                        <div className="text-start ms-2 row d-flex flex-row w-100 h-75 mb-4" style={{margin: "-2px 0px 0px 0px"}}>
                                            <div className="col-6">
                                                <h5 className="fw-bold">{game.title}</h5>
                                                <p className="text-black fw-normal fs-6" style={{margin: "-8px 0px 0px 0px"}}>{game.genre}</p>
                                                <p className="text-black fw-normal fs-6">Platform: {game.platform}</p>
                                            </div>
                                            <div className="d-flex align-items-center border border-gray rounded my-1" style={{width: "85px", height: "30px"}}>
                                                <button onClick={() => updateQuantity(game.id, game.quantity - 1)} className="text-black border-0 bg-white fs-6">-</button>
                                                <span className="mx-2" style={{fontSize: "14px"}}>{game.quantity}</span>
                                                <button onClick={() => updateQuantity(game.id, game.quantity + 1)} className="text-black border-0 bg-white fs-6" >+</button>
                                            </div>
                                            <div className="col-4 align-items-center text-end">
                                                <span className="text-black fw-medium text-end me-2 my-1" style={{fontSize: "19px"}}>43.000d</span>
                                                <br />
                                                <div className="d-flex justify-content-end">
                                                    <span className="fs-6 bg-danger fw-bold text-white text-center d-flex align-items-center justify-content-center me-2 my-1" id="discount">-95%</span>
                                                    <span className="text-secondary fw-medium text-end me-2 my-1 text-decoration-line-through">430.000d</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" ms-3 h-25 d-flex border-top align-items-center me-3">
                                            <div className="d-flex mt-2 w-50">
                                                <svg class="rd Eb Fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "15px"}}>
                                                    <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.8-10.3-2.5-15.2zM32 199.8c0-1.7.3-3.4.8-5.1L83.4 42.9C85.6 36.4 91.7 32 98.6 32H240v168H32v-.2zM480 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V232h448v232zm0-264H272V32h141.4c6.9 0 13 4.4 15.2 10.9l50.6 151.8c.5 1.6.8 3.3.8 5.1v.2z"></path>
                                                </svg>
                                                <span style={{fontSize: "14px"}} className="ms-1">Tình trạng: <span className="text-success">Còn hàng</span></span>
                                            </div>
                                            <div className="d-flex justify-content-end w-50 mt-2">
                                                <img src={trashcan} alt="Delete" style={{ width: "20px" }} onClick={() => removeFromCart(game.id)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <Row className="mt-5 col-4">
                    <Col className="d-flex flex-column align-items-start">
                        <Button variant="bg-white text-black fw-bold" className="mb-2" id="bt1">
                            <i style={{stroke: "1px black"}} className="bi bi-person"></i> Bạn có mã giới thiệu?
                        </Button>
                        <Button variant="bg-white text-black font-weight-xl fw-bold" className="mb-2" id="bt2">
                            <i className="bi bi-percent"></i> Bạn có mã ưu đãi?
                        </Button>
                        <Button variant="bg-white text-black fw-bold" id="bt3">
                            <i className="bi bi-gift"></i> Bạn muốn tặng cho bạn bè?
                        </Button>
                        {/* Có hàng - Hiển thị mục thanh toán*/}
                        {totalItems > 0 && current < 2? (
                        <>
                        <div className="my-3 w-100" id="thanhtoan">
                            <p className="fs-5 bg-white text-black fw-bold text-start">Thanh toán</p>
                            <div className="d-flex align-items-center mt-2 w-100 me-5 border-bottom" id="text1">
                                <p className="text-black text-start fw-normal col-6">Tổng giá trị sản phẩm</p>
                                <div className="col-6 d-flex justify-content-end">
                                    <p className="text-end text-black fw-normal">{totalPrice}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-2 w-100 me-5" id="text">
                                <p className="text-black text-start fw-normal col-6">Tổng giá trị phải thanh toán</p>
                                <div className="col-6 d-flex justify-content-end">
                                    <p className="text-end text-black fw-normal">{totalPrice}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-2 w-100 me-5" id="text">
                                <p className="text-black text-start fw-normal col-6">Số dư hiện tại</p>
                                <div className="col-6 d-flex justify-content-end">
                                    <p className="text-end text-black fw-normal">{totalPrice}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-2 w-100 me-5" id="text">
                                <p className="text-black text-start fw-normal col-6">Số tiền cần nạp thêm</p>
                                <div className="col-6 d-flex justify-content-end">
                                    <p className="text-end text-black fw-normal">{totalPrice}</p>
                                </div>
                            </div>
                            {current === 0 && current < 2 ? (
                            // STEP 1
                            <>
                            <div className="d-flex align-items-center w-100" id="">
                                <NavLink to="/login" className={"w-100"}>
                                    <button className="w-100 fw-medium text-white border-0" id="btn-payment" >
                                        <img src={controller} alt="" width={"40px"} className="me-2"/>
                                        Đăng nhập để thanh toán
                                    </button>
                                </NavLink>                           
                            </div>
                            <div className="align-items-center mt-2 w-100" id="text">
                                <p className="text-muted fw-normal">Quét mã. Thanh toán. Không cần đăng nhập.</p>
                            </div>
                            <div className="w-100" id="">
                                <button className="w-100 fw-medium text-white border-0" id="btn-scan" onClick={nextStep}>
                                    <img src={scan} alt="" width={"30px"} className="me-1"/>
                                    Mua siêu tốc qua Mobile Banking
                                </button>
                            </div>
                            <div className="w-100" id="">
                                <button className="w-100 fw-medium text-white border-0" id="btn-momo" onClick={nextStep}>
                                    <img src={momo} alt="" width={"30px"} className="me-1"/>
                                    Mua siêu tốc với MoMo
                                </button>
                            </div>
                            </>) : (
                            // STEP 2
                            <>
                            <div className="w-100" id="">
                                <button className="w-100 fw-medium text-white border-0" id="btn-confirm" onClick={nextStep}>
                                    <img src={whitewallet} alt="" width={"25px"} className="me-1 mb-1"/>
                                    Xác nhận để thanh toán
                                </button>
                                <button className="bg-none w-100 text-end fw-medium text-white border-0" id="btn-back" onClick={prevStep}>
                                     Quay lại bước trước đó
                                </button>
                            </div>
                            </>)}
                        </div>
                        </>
                        ) : (
                        // STEP 3
                        <>
                        <div className="align-items-center">
                            <Image src={qrcode} width={"350px"}></Image>
                            <span><i>Quét mã QR Code để thực hiện giao dịch</i></span>
                            <button className="w-100 border-0 text-white fw-medium" id="btn-confirm-payment">Tôi đã hoàn tất thanh toán</button>
                            <button className="bg-none w-100 text-end fw-medium text-white border-0" id="btn-back" onClick={prevStep}>
                                     Quay lại bước trước đó
                                </button>
                        </div>
                        </>)}
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
        <div className="bg-white mt-2 d-flex align-items-center " style={{width: "100%", height: "60px"}}>
            <img src={momo} alt="MoMo" style={{width: "27px", height: "27px", margin: "0px 0px 0px 155px"}}/> 
            <img src={vnpay} alt="vnpay" style={{width: "75px", height: "25px", margin: "0px 0px 0px 13px"}}/>
            <img src={mastercard} alt="mastercard" style={{width: "80px", height: "28px", margin: "0px 0px 0px -10px"}}/>
            <img src={visa} alt="visa" style={{width: "55px", height: "55px", margin: "0px 0px 0px -10px"}}/>
            <p className="text-black fw-normal fs-6 ms-2 d-block">
                <small>và nhiều hình thức thanh toán khác</small>
            </p>
        </div>
        </>
    )
}

export default Cart;