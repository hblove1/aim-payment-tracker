import React from 'react';
import Player from './Player';

const Players = ({ players }) => {
  return (
    <div className="players">
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
