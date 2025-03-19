import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card,Button, Form, Spinner, Alert, Pagination } from "react-bootstrap";
import { FaFilter, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "./GameSteam.css";

const GameSteam = () => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filter, setFilter] = useState({ genre: "", platform: "", sortBy: "" });
    const [tempFilter, setTempFilter] = useState({ genre: "", platform: "", sortBy: "" });

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(24);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/src/database/db.json")
            .then(response => {
                if (response.data && response.data.games) {
                    setGames(response.data.games);
                    setFilteredGames(response.data.games);
                } else {
                    throw new Error("Dữ liệu không hợp lệ");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Lỗi tải dữ liệu:", error);
                setError("Không thể tải dữ liệu.");
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let filtered = games;

        if (filter.genre) {
            filtered = filtered.filter(game => game.genre === filter.genre);
        }
        if (filter.platform) {
            filtered = filtered.filter(game => game.platform === filter.platform);
        }
        if (filter.sortBy === "nameasc") {
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        }
        if (filter.sortBy === "release_date") {
            filtered = [...filtered].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        }
        if (filter.sortBy === "namedesc") {
            filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
        }
        if (filter.sortBy === "release_dateasc") {
            filtered = [...filtered].sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        }

        setFilteredGames(filtered);
        setCurrentPage(1);
    }, [filter, games]);

    // Logic phân trang
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleResetFilter = () => {
        setFilter({ genre: "", platform: "", sortBy: "" });
        setTempFilter({ genre: "", platform: "", sortBy: "" });
    };

    const handleApplyFilter = () => {
        setFilter(tempFilter);
    };

    const handleCardClick = (gameId) => {
        navigate(`/gamelist/${gameId}`);
    };

    return (
        <Container className="steam-game-container mt-4">
            <h1 className="text-center mb-4">Game trên Steam</h1>

            {/* Bộ lọc */}
            <Row className="mb-4">
                <Col md={3}>
                    <Form.Select
                        value={tempFilter.genre}
                        onChange={(e) => setTempFilter(prev => ({ ...prev, genre: e.target.value }))}
                    >
                        <option value="">Tất cả thể loại</option>
                        <option value="MMORPG">MMORPG</option>
                        <option value="Shooter">Shooter</option>
                        <option value="Action RPG">Action RPG</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select
                        value={tempFilter.platform}
                        onChange={(e) => setTempFilter(prev => ({ ...prev, platform: e.target.value }))}
                    >
                        <option value="">Tất cả nền tảng</option>
                        <option value="PC (Windows)">PC (Windows)</option>
                        <option value="Web Browser">Web Browser</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select
                        value={tempFilter.sortBy}
                        onChange={(e) => setTempFilter(prev => ({ ...prev, sortBy: e.target.value }))}
                    >
                        <option value="">Sắp xếp theo</option>
                        <option value="nameasc">Tên (A-Z)</option>
                        <option value="namedesc">Tên (Z-A)</option>
                        <option value="release_datedesc">Ngày ra mắt (mới nhất)</option>
                        <option value="release_dateasc">Ngày ra mắt (cũ nhất)</option>
                    </Form.Select>
                </Col>
                <Col md={3} className="d-flex gap-2">
                    <Button variant="primary" onClick={handleApplyFilter}>
                        <FaFilter /> Lọc
                    </Button>
                    <Button variant="secondary" onClick={handleResetFilter}>
                        <FaRedo /> Khôi phục bộ lọc
                    </Button>
                </Col>
            </Row>

            {/* Danh sách game */}
            <Row>
                {loading && (
                    <Col className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Đang tải...</span>
                        </Spinner>
                    </Col>
                )}
                {error && (
                    <Col className="text-center">
                        <Alert variant="danger">{error}</Alert>
                    </Col>
                )}
                {!loading && !error && currentGames.map((game) => (
                    <Col key={game.id} md={3} className="mb-4">
                        <Card onClick={() => handleCardClick(game.id)}>
                            <Card.Img variant="top" src={game.thumbnail} alt={game.title} />
                            <Card.Body>
                                <Card.Title>{game.title}</Card.Title>
                                <Card.Text className="text-muted">
                                    {game.genre} - {game.platform}
                                </Card.Text>
                                <Card.Text>Phát hành bởi: {game.publisher}</Card.Text>
                                <Card.Text>Ngày ra mắt: {game.release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Phân trang */}
            {totalPages > 1 && (
                <Row className="mt-4">
                    <Col className="d-flex justify-content-center">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            />
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item
                                    key={i + 1}
                                    active={i + 1 === currentPage}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            />
                        </Pagination>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default GameSteam;