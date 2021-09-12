import React from "react";

import 'css/GameCard.scss';

const gameImageUrl = (_id) => `https://superaonline.com.br/children-images/${_id}.jpg`;

const GameCard = ({game, onClick, ...props}) => {

  return (
    <div id='gameCard' onClick={() => onClick(game.id)}>
      <img id='gameImg' src={gameImageUrl(game.id)} />
      <div id='gameTextHolder'>
        <span style={{margin: 'auto'}}>{game.name}</span>
      </div>
    </div>
  );
};

export default GameCard;
