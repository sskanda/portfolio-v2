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

///background-effect//////
const onHome = document.getElementsByClassName("fp-viewing-page-home");
const onAbout = document.getElementsByClassName("fp-viewing-page-about");
const onWork = document.getElementsByClassName("fp-viewing-page-work");
const onContact = document.getElementsByClassName("fp-viewing-page-contact");
const rightcircle = document.getElementsByClassName("right-end-circle")[0].style;
const leftcircle = document.getElementsByClassName("left-end-circle")[0].style;
const options = { attributes: true };
const body = document.querySelector("body");
const observer = new MutationObserver(scrollAnimations);
const homelink = document.querySelector("#homelink");
const aboutlink = document.querySelector("#aboutlink");
const worklink = document.querySelector("#worklink");
const contactlink = document.querySelector("#contactlink");
observer.observe(body, options);

document.addEventListener('click', function (e) {
    console.log("erer");
})

function scrollAnimations(mutationList) {
    mutationList.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (onHome.length) {
                rightcircle.width = '75vmax';
                rightcircle.top = '-35vmax';
                rightcircle.left = '50%';
                rightcircle.transform = '';
                rightcircle.background = 'violet';


                leftcircle.width = '50vmax';
                leftcircle.top = '70%';
                leftcircle.left = '-25%';
                leftcircle.transform = '';
                leftcircle.backgroundColor = 'grey';
            }

            if (onAbout.length) {
                rightcircle.width = '130vmax';
                rightcircle.top = '-100vmax';
                rightcircle.left = '50%';
                rightcircle.transform = 'translateX(-50%)';
                // rightcircle.background = 'green';

                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'black';
                leftcircle.left = '50%';
                // body.style.background = 'red';
            }
            if (onWork.length) {
                rightcircle.top = '-300%';
                // rightcircle.backgroundColor = 'orange';
                leftcircle.width = '45vmax';
                leftcircle.left = '50%';
                leftcircle.top = '-70%'
                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'var(--valotopcircle)';
                body.style.backgroundColor = 'var(--valobg)';
                body.style.color = 'white';
                headercolor("white");
            }
            if (onContact.length) {
                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'yellow';
                leftcircle.left = '50%';
                leftcircle.top = '70%'
            }
        }
    })
}

function headercolor(color) {
    homelink.style.color = color;
    aboutlink.style.color = color;
    worklink.style.color = color;
    contactlink.style.color = color;
}