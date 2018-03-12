import React, { Component } from 'react';
import * as AnimationControl from './Animations/AnimationControl';

export default class Sheep extends Component {

    run = () => {
        if (AnimationControl.moving) return;
        AnimationControl.moving = true;

        AnimationControl.sheep.toggleClass();
        AnimationControl.sheep.addClass("run_"+AnimationControl.direction);


        setTimeout(function(){
            AnimationControl.sheep.css('left', sheep.css('left'));
            AnimationControl.sheep.toggleClass();
            AnimationControl.sheep.addClass("idle_"+AnimationControl.direction);

            setTimeout(function() {
                AnimationControl.direction = AnimationControl.direction === 'right' ? 'left' : 'right';
                AnimationControl.sheep.addClass("run_"+AnimationControl.direction);

                setTimeout(function(){
                    AnimationControl.sheep.css('left', sheep.css('left'));
                    AnimationControl.sheep.toggleClass();
                    AnimationControl.sheep.addClass("idle_"+AnimationControl.direction);

                        //      AnimationControl.moving = false;
                }, Math.random()*2000+2000);
            }, 1000);


        }, 4900);
    }

    walk = () => {
        if (AnimationControl.moving) return;
        AnimationControl.moving = true;

        sheep.toggleClass();
        sheep.addClass("walk_"+direction);

        setTimeout(function(){
            sheep.css('left', sheep.css('left'));
            sheep.toggleClass();
            sheep.addClass("idle_"+direction);

            setTimeout(function() {
                direction = direction === 'right' ? 'left' : 'right';
                sheep.addClass("walk_"+direction);

                setTimeout(function(){
                    sheep.css('left', sheep.css('left'));
                    sheep.toggleClass();
                    sheep.addClass("idle_"+direction);
                    AnimationControl.moving = false;
                }, Math.random()*4000+2000);
            }, 1000);


        }, 10000);
    }

    componentDidMount() {
        switch (this.props.animation) {
            case 'run':
                this.run();
            case 'walk':
                this.walk();
            default:
                return;
        }
    }

    render () {
        return (
            <div id="sheep" className="idle_left">&nbsp;</div>
        )
    }
}