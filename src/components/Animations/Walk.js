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