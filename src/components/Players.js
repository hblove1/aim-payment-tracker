import React from 'react';
import Player from './Player';

const Players = ({ players }) => {
  return (
    <div className="players">
      <div className="player-wrapper">
        <div className="player">
          <div className="player-name">Name</div>
          <div className="player-sub">Sub</div>
          <div className="player-email">Email</div>
          <div className="player-balance">Balance</div>
        </div>
      </div>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
