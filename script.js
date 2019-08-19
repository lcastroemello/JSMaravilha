var container = $(".container");
var bar = $(".bar");
var topImage = $(".top-image");
var body = $("body");
var mouseDown = false;

// Make the bar draggable: when I drag it, its left position changes

bar.on("mousedown", function fn(e) {
    e.preventDefault();
    mouseDown = true;
});

body.on("mouseup", function fn() {
    mouseDown = false;
});

body.on("mousenter", function fn() {
    if (mouseDown === true) {
        mouseDown = false;
    }
});

container.on("mousemove", function(i) {
    if (mouseDown && i.pageX <= container.width()) {
        bar.css({
            left: i.clientX - 5 + "px"
        });
        topImage.css({
            width: i.clientX + "px"
        });
    }
});

// make the div width for the top picture equal to the position of the bar at all times
