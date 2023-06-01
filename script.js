'use strict'
new fullpage('#fullpage', {
    //options here
    licenseKey: '31EB1867-F27C4C2E-90C981D3-01B86BEC',
    autoScrolling: true,
    // scrollHorizontally: true,
    // slidesNavigation: true,
    // slidesNavPosition: 'bottom',
    // resetSliders: true,
    // resetSlidersKey: 'b3JvcGVuZG9sYS5kZXZfUUtwY21WelpYUlRiR2xrWlhKejI0ZA==',
});

const boxmenu = document.querySelector('.box-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fa-solid');
const cursor = document.querySelector('.cursor');
const cursorBorder = document.querySelector("#cursor-border");
const cursorPosition = { x: 0, y: 0 };
const cursorBorderPosition = { x: 0, y: 0 };

boxmenu.addEventListener('click', function () {
    console.log('clicked');
    navbar.classList.toggle("nav-active");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark")

    }
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

})

//cursore effect//
document.addEventListener("mousemove", (e) => {
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPosition.x += (cursorPosition.x - cursorBorderPosition.x) / easting;
    cursorBorderPosition.y += (cursorPosition.y - cursorBorderPosition.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPosition.x}px, ${cursorBorderPosition.y}px)`;
    requestAnimationFrame(loop);
});

window.addEventListener('click', function (e) {
    applyCursorRippleEffect(e);
})

function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = `ripple-effect 1s  linear`;
    ripple.onanimationend = () => {
        document.body.removeChild(ripple);

    }

}