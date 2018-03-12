import React, { Component } from 'react';
import Sheep from './Sheep';

export default class Game extends Component {
    state = {
        animation: null
    }

    componentWillMount () {
        // get animation
        this.setState(() =>  ({ animation: null }));
    }

    componentWillUpdate (nextProps) {
        if (this.props !== nextProps) {
            // get animation
            this.setState(() =>  ({ animation: null }));
        }
    }

    render () {
        return (
            <div id="world">
                <div id="sky">&nbsp;</div>
                <div id="grass_front">&nbsp;</div>

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