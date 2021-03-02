import { useEffect, useState } from "react";
import "./App.css";
import PlayerInfo from "./Components/PlayerInfo/PlayerInfo";
import playerInfo from "./fakeData/fakeData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Cart/Cart";

function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerInfo);
  }, []);
  const [cart, setCart] = useState([]);

  const handleTeam = (singlePlayer) => {
    const newCart = [...cart, singlePlayer];
    setCart(newCart);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Player Information</h1>
      <div className="home-page-container">
        <div className="player-info">
          {player.map((player) => (
            <PlayerInfo
              key={player.id}
              handleTeam={handleTeam}
              singlePlayer={player}
            ></PlayerInfo>
          ))}
        </div>
        <div className="cart-info">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
