function whichAnimationEvent(){
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

let animationEvent = whichAnimationEvent();
let direction = Math.random() < 0.5 ? 'left' : 'right';

let moving = false;
let sheep = $('#sheep');

sheep.css('left','35%');

// eat
document.addEventListener('eat', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("grab_"+direction);

    sheep.one(animationEvent, function(event) {
        setTimeout(function(){
            sheep.toggleClass();
            sheep.addClass("chew_"+direction);
            sheep.one(animationEvent, function(event) {
                sheep.toggleClass();
                sheep.addClass("swallow_"+direction);

                setTimeout(function(){
                    sheep.toggleClass();
                    sheep.addClass("idle_"+direction);
                    moving = false;
                }, 1000);
            });

        }, 500);
    });
});

// run
document.addEventListener('run', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("run_"+direction);

    setTimeout(function(){
        sheep.css('left', sheep.css('left'));
        sheep.toggleClass();
        sheep.addClass("idle_"+direction);

        setTimeout(function() {
            direction = direction === 'right' ? 'left' : 'right';
            sheep.addClass("run_"+direction);

            setTimeout(function(){
                sheep.css('left', sheep.css('left'));
                sheep.toggleClass();
                sheep.addClass("idle_"+direction);

                moving = false;
            }, Math.random()*2000+2000);
        }, 1000);


    }, 4900);
});

// walk
document.addEventListener('walk', function (e) {
    if (moving) return;
    moving = true;

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
                moving = false;
            }, Math.random()*4000+2000);
        }, 1000);


    }, 10000);
});

// die
document.addEventListener('die', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("die_"+direction);
    moving = false;
});

// idle
document.addEventListener('idle', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("idle_"+direction);
    moving = false;
});