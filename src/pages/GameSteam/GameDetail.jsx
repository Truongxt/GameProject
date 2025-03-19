import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion} from 'react-bootstrap';
import './GameDetail.css'; // Import file CSS

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cuộn lên đầu trang khi component được render
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);

    useEffect(() => {
        axios.get(`/src/database/db.json`)
            .then(response => {
                if (response.data && response.data.games) {
                    const foundGame = response.data.games.find(game => game.id === parseInt(id));
                    if (foundGame) {
                        setGame(foundGame);
                    } else {
                        throw new Error('Không tìm thấy game');
                    }
                } else {
                    throw new Error('Dữ liệu không hợp lệ');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Lỗi tải dữ liệu:', error);
                setError('Không thể tải thông tin game.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center mt-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    if (!game) {
        return (
            <Container className="text-center mt-5">
                <Alert variant="warning">Không tìm thấy thông tin game.</Alert>
            </Container>
        );
    }

    return (
        <Container className="game-detail-container mt-4">
            <Row className="justify-content-center">
                <Col md={12}>
                    {/* Khung chứa thông tin game */}
                    <Card className="game-card">
                        <Card.Body>
                            <Row>
                                {/* Phần hình ảnh */}
                                <Col md={8}>
                                    <Card.Img
                                        variant="top"
                                        src={game.thumbnail}
                                        alt={game.title}
                                        className="img-fluid"
                                    />
                                </Col>

                                {/* Phần thông tin và nút hành động */}
                                <Col md={4}>
                                    <Card.Title className="mb-3">{game.title}</Card.Title>

                                    {/* Thông tin chi tiết */}
                                    <Card.Text className="mb-2">
                                        Tình trạng: Còn hàng
                                    </Card.Text>
                                    <Card.Text className="mb-2">
                                        Thể loại: {game.genre}
                                    </Card.Text>
                                    <Card.Text className="mb-2">
                                        Nhà phát hành: {game.publisher}
                                    </Card.Text>
                                    <Card.Text className="mb-2">
                                        Ngày ra mắt: {game.release_date}
                                    </Card.Text>
                                    <Card.Text className="mb-4">
                                        Mô tả: {game.short_description}
                                    </Card.Text>

                                    {/* Giá cả và khuyến mãi */}
                                    <Card.Text className="mb-2">
                                        Giá: <span className="text-danger">99.000đ</span>
                                    </Card.Text>
                                    <Card.Text className="mb-4">
                                        Tiết kiệm: <span className="text-success">2.900.900đ (+3%)</span>
                                    </Card.Text>

                                    {/* Nút hành động */}
                                    <Button variant="danger" className="w-100 mb-3">
                                        Mua ngay
                                    </Button>
                                    <Button variant="outline-secondary" className="w-100">
                                        Thêm vào giỏ hàng
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Phần cốt truyện của game */}
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title className="mb-3">Cốt truyện của game</Card.Title>
                            <Card.Text>
                                {game.story || "Cốt truyện của game chưa được cập nhật."}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* Phần chính sách bảo hành */}
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title className="mb-3">Chính sách bảo hành</Card.Title>
                            <Card.Text>
                                - Sau khi mua, bạn sẽ nhận được tài khoản Steam đã mua sẵn <strong>{game.title}</strong>.
                                <br />
                                - Trước khi chơi, cần chuyển Steam sang <strong>chế độ Offline</strong> theo hướng dẫn. Bạn có thể chuyển sang <strong>Online</strong> để cập nhật rồi chuyển về <strong>Offline</strong>.
                                <br />
                                - Vui lòng không đổi email và mật khẩu. Chúng tôi không hỗ trợ bảo hành nếu bạn đổi email và mật khẩu.
                                <br />
                                - Tham khảo hướng dẫn để chuyển đổi giữa các tài khoản Steam.
                                <br />
                                - Chỉ hỗ trợ đăng nhập và sử dụng trên 1 thiết bị cá nhân, không hỗ trợ đăng nhập trên thiết bị khác.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* Phần câu hỏi thường gặp (FAQ) */}
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title className="mb-3">Câu hỏi thường gặp</Card.Title>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Quy trình nhận hàng như thế nào?</Accordion.Header>
                                    <Accordion.Body>
                                        1. Đây là tài khoản Steam tạo sẵn đã mua game <strong>{game.title}</strong>.
                                        <br />
                                        2. Sau khi mua hàng thành công, bạn sẽ nhận được ngay thông tin tài khoản Steam (bao gồm tài khoản, mật khẩu và backup code).
                                        <br />
                                        3. Thời gian xử lý: Bạn sẽ nhận được thông tin tài khoản ngay sau khi thanh toán thành công.
                                        <br />
                                        4. Hình thức nhận hàng: Thông tin đăng nhập trong đơn hàng.
                                        <br />
                                        5. Sản phẩm chỉ hỗ trợ và sử dụng trên 1 thiết bị.
                                        <br />
                                        6. Hướng dẫn khi sử dụng <strong>Offline Mode Steam</strong>.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Tôi có thể chuyển đổi giữa các tài khoản Steam không?</Accordion.Header>
                                    <Accordion.Body>
                                        Có, bạn có thể chuyển đổi giữa các tài khoản Steam. Tuy nhiên, vui lòng tham khảo hướng dẫn để thực hiện đúng cách.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Tôi có thể sử dụng trên nhiều thiết bị không?</Accordion.Header>
                                    <Accordion.Body>
                                        Không, sản phẩm chỉ hỗ trợ đăng nhập và sử dụng trên 1 thiết bị cá nhân. Không hỗ trợ đăng nhập trên thiết bị khác.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default GameDetail;