import React from 'react';
import { RiAddFill } from 'react-icons/io';

const Player = ({ player }) => {
  return (
    <div className="player">
      <label>{player.firstName + ' ' + player.lastName}</label>
      <input type="select" />
      <label>{player.email}</label>
      <label>{player.balance}</label>
      <RiAddFill />
    </div>
  );
};

export default Player;
