import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GameSteam.css";
import { FaFilter, FaRedo } from "react-icons/fa"; // Import icon

const GameSteam = () => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [visibleGames, setVisibleGames] = useState(24);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filter, setFilter] = useState({ genre: "", platform: "", sortBy: "" });

    const [tempFilter, setTempFilter] = useState({ genre: "", platform: "", sortBy: "" });

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
        setVisibleGames(24);
    }, [filter, games]);

    const loadMore = () => {
        setVisibleGames(prev => prev + 24);
    };

    const handleResetFilter = () => {
        setFilter({ genre: "", platform: "", sortBy: "" });
        setTempFilter({ genre: "", platform: "", sortBy: "" });
    };

    const handleApplyFilter = () => {
        setFilter(tempFilter);
    };

    return (
        <div className="steam-game-container">
            <h1>Game trên Steam</h1>

            {/* Bộ lọc */}
            <div className="filter-container">
                <select onChange={(e) => setTempFilter(prev => ({ ...prev, genre: e.target.value }))} value={tempFilter.genre}>
                    <option value="">Tất cả thể loại</option>
                    <option value="MMORPG">MMORPG</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Action RPG">Action RPG</option>
                </select>
                <select onChange={(e) => setTempFilter(prev => ({ ...prev, platform: e.target.value }))} value={tempFilter.platform}>
                    <option value="">Tất cả nền tảng</option>
                    <option value="PC (Windows)">PC (Windows)</option>
                    <option value="Web Browser">Web Browser</option>
                </select>
                <select onChange={(e) => setTempFilter(prev => ({ ...prev, sortBy: e.target.value }))} value={tempFilter.sortBy}>
                    <option value="">Sắp xếp theo</option>
                    <option value="nameasc">Tên (A-Z)</option>
                    <option value="namedesc">Tên (Z-A)</option>
                    <option value="release_datedesc">Ngày ra mắt (mới nhất)</option>
                    <option value="release_dateasc">Ngày ra mắt (cũ nhất)</option>
                </select>

                {/* Nút lọc & Khôi phục */}
                <button className="filter-button" onClick={handleApplyFilter}>
                    <FaFilter /> Lọc
                </button>
                <button className="reset-button" onClick={handleResetFilter}>
                    <FaRedo /> Khôi phục bộ lọc
                </button>
            </div>

            {/* Danh sách game */}
            <div className="game-list">
                {loading && <p>Đang tải...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && filteredGames.slice(0, visibleGames).map((game) => (
                    <div key={game.id} className="game-card">
                        <img src={game.thumbnail} alt={game.title} />
                        <h3>{game.title}</h3>
                        <p className="genre">{game.genre} - {game.platform}</p>
                        <p className="publisher">Phát hành bởi: {game.publisher}</p>
                        <p className="release-date">Ngày ra mắt: {game.release_date}</p>
                        <a href={game.game_url} className="play-now" target="_blank" rel="noopener noreferrer">
                            Tải ngay
                        </a>
                    </div>
                ))}
            </div>

            {/* Nút xem thêm */}
            {visibleGames < filteredGames.length && (
                <button onClick={loadMore} className="load-more">Xem thêm</button>
            )}
        </div>
    );
};

export default GameSteam;
