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
