import React from 'react';
import { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import NewTransaction from './NewTransaction';

const Player = ({ player }) => {
  const [addTransaction, setAddTransaction] = useState(false);

  const toggleAddTransaction = () => {
    setAddTransaction(!addTransaction);
  }

  return (
    <div className="player-wrapper">
      <div className="player">
        <div className="player-name">{player.firstName + ' ' + player.lastName}</div>
        <div className="player-sub"><input type="checkbox" /></div>
        <div className="player-email">{player.email}</div>
        <div className="player-balance">{player.balance}</div>
        <FaDollarSign className="addTransaction" onClick={toggleAddTransaction} />
      </div>
      {addTransaction && <NewTransaction player={player} />}
    </div>
  );
};

export default Player;
