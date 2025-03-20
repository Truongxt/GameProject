import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext"; 
import gamesData from "../../database/db.json";

const GameList = () => {
    const { addToCart } = useCart(); 
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(gamesData.games); 
    }, []);

    return (
        <div>
            <h2>Danh sách Game</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <img src={game.thumbnail} alt={game.title} width={100} />
                        <h3>{game.title}</h3>
                        <p>{game.short_description}</p>
                        <button onClick={() => addToCart(game)}>Thêm vào giỏ</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;