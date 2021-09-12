import React, { useState, useEffect } from "react";

import 'css/PlayPage.scss';
import GameCard from "../components/GameCard";
import superaIcon from 'images/supera_logo.png';

// TODO: Handle errors, no games (refresh button, try again button)

const PlayPage = (props) => { 
  const [games, setGames] = useState([]);

  useEffect(() => {
    const _games = props.gameService();
    setGames(_games);
  }, [])

  return (
  <div>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F56C27', height: '50px', width: '100%', marginBottom: '15px'}}>
      <img src={superaIcon} style={{height: '40px', width: '90px', margin: 'auto'}} />
    </div>
    <div id='gameList'>
      {
        games.map((game, idx) => (
          <GameCard game={game} key={`game-${idx}`} />
        ))
      }  
    </div>
  </div>
  )
}

export default PlayPage;

// Games
// {
//   id: Number,
//   name: String,
//   description: String,
// }