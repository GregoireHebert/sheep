import React, { Component } from 'react';

export default class Hud extends Component {
  state = {
    hearts: null
  };

  render () {
    return (
      <div id="hud">
        <div className="heart">&nbsp;</div>
        <div className="heart">&nbsp;</div>
        <div className="heart">&nbsp;</div>
        <div className="heart inactive">&nbsp;</div>
        <div className="heart inactive">&nbsp;</div>

        <div className="spacing">&nbsp;</div>

        <div className="hungry">&nbsp;</div>
        <div className="hungry">&nbsp;</div>
        <div className="hungry">&nbsp;</div>
        <div className="hungry inactive">&nbsp;</div>
        <div className="hungry inactive">&nbsp;</div>

        <div className="spacing">&nbsp;</div>

        <div className="playful">&nbsp;</div>
        <div className="playful">&nbsp;</div>
        <div className="playful inactive">&nbsp;</div>
        <div className="playful inactive">&nbsp;</div>
        <div className="playful inactive">&nbsp;</div>

        <div className="spacing">&nbsp;</div>

        <div className="sleep">&nbsp;</div>
        <div className="sleep">&nbsp;</div>
        <div className="sleep inactive">&nbsp;</div>
        <div className="sleep inactive">&nbsp;</div>
        <div className="sleep inactive">&nbsp;</div>
      </div>
    );
  }
}
