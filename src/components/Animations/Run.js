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