// idle
document.addEventListener('idle', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("idle_"+direction);
    moving = false;
});