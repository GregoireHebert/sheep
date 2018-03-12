import $ from 'jquery';

export const whichAnimationEvent = () => {
    let t, el = document.createElement("sheep");

    let animations = {
        "animation"      : "animationend",
        "OAnimation"     : "oAnimationEnd",
        "MozAnimation"   : "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    };

    for (t in animations){
        if (el.style[t] !== undefined){
            return animations[t];
        }
    }
}

export let animationEvent = whichAnimationEvent();
export let direction = Math.random() < 0.5 ? 'left' : 'right';

export let moving = false;
export let sheep = $('#sheep');

sheep.css('left','35%');
