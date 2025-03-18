import { Container, Row, Form, FloatingLabel } from "react-bootstrap";
import './SteamWallet.css'
const SteamWallet = () => {
    return(
        <Container>
            <Row className="gap-3 d-flex m-0 text-start">
                <FloatingLabel label="Sắp xếp" className="custom-input m-0 p-0 col-3" style={{ fontSize: "13px" }}>    
                    <Form.Select style={{ fontSize: "15px" }} className="ms-auto">
                        <option value="Mặc định">Mặc định</option>
                    </Form.Select>
                </FloatingLabel>
                <label htmlFor="" className="col-1">Mức giá</label>
                <FloatingLabel label="Từ" className="p-0 col-3" style={{ fontSize: "13px" }}>    
                    <Form.Control className="ms-auto" type="text"></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="Đến" className="p-0 col-3" style={{ fontSize: "13px" }}>    
                    <Form.Control className="ms-auto"></Form.Control>
                </FloatingLabel>
            </Row>
        </Container>
    );
}

export default SteamWallet;