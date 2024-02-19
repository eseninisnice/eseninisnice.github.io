var wish_x = 0;
var wish_y = 0;
var lerped_x = 0;
var lerped_y = 0;

const position = 2;

var shift = document.getElementById("background-image");
shift.style.transform = `translateX(0px) translateY(0px) scaleX(1.25) scaleY(1.25)`;

document.addEventListener("mousemove", (event) => {
    
    wish_x = (window.innerWidth - event.pageX * position) / 90;
    wish_y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${wish_x}px) translateY(${wish_y}px) scaleX(1.25) scaleY(1.25)`;
});
