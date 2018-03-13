import React, { Component } from 'react';
import Sheep from './Sheep';
import Hud from './Hud';

export default class Game extends Component {
  state = {
    animation: null
  };

  componentWillMount () {
    // Fixtures
    const anims = ['run', 'eat', 'walk', 'die', 'idle'];
    this.setState(() =>  ({ animation: anims[Math.floor(Math.random()*anims.length)] }));

    setInterval(() => {
      this.setState(() =>  ({ animation: anims[Math.floor(Math.random()*anims.length)] }));
    }, 20000);
  }

  render () {
    return (
      <div id="world">
        <div id="sky">&nbsp;</div>
        <div id="grass_front">&nbsp;</div>
        <Hud />
        <Sheep animation={this.state.animation} />

        <div id="grass_back">&nbsp;</div>
        <div id="treeone">&nbsp;</div>
        <div id="treetwo">&nbsp;</div>
        <div id="rockone">&nbsp;</div>
        <div id="rocktwo">&nbsp;</div>
      </div>
    );
  }
}
