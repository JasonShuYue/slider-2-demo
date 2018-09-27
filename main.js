let images = $('.window img');
let TIME_INTERVAL = 2000;

let n = 0;
let size = images.length;


init();

setInterval(() => {
    moveToLeft($(images[n % size]))
        .one('transitionend', (e) => {
            moveToRight($(e.currentTarget));
        });
    moveToCurrent($(images[(n+1) % size]));
    n = n + 1;
}, TIME_INTERVAL);


function init() {
    let n = 0;
    $(images[n]).addClass('current').siblings().addClass("right");
}

function moveToCurrent($node) {
    $node.removeClass("left right").addClass("current");
    return $node;
}

function moveToLeft($node) {
    $node.removeClass("current right").addClass("left");
    return $node;
}

function moveToRight($node) {
    $node.removeClass("left current").addClass("right");
    return $node;
}