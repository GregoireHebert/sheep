// die
document.addEventListener('die', function (e) {
    if (moving) return;
    moving = true;

    sheep.toggleClass();
    sheep.addClass("die_"+direction);
    moving = false;
});
