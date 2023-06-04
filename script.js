'use strict'
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
});

const boxmenu = document.querySelector('.box-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fa-solid');
const cursor = document.querySelector('.cursor');
const cursorBorder = document.querySelector("#cursor-border");
const cursorPosition = { x: 0, y: 0 };
const cursorBorderPosition = { x: 0, y: 0 };


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
const onWork2 = document.getElementsByClassName("fp-viewing-page-work-2");
const onWork3 = document.getElementsByClassName("fp-viewing-page-work-3");
const onContact = document.getElementsByClassName("fp-viewing-page-contact");
const rightcircle = document.querySelector(".right-end-circle").style;
const leftcircle = document.querySelector(".left-end-circle").style;
const options = { attributes: true };
const body = document.querySelector("body");
const observer = new MutationObserver(scrollAnimations);
const homelink = document.querySelector("#homelink");
const aboutlink = document.querySelector("#aboutlink");
const worklink = document.querySelector("#worklink");
const contactlink = document.querySelector("#contactlink");
observer.observe(body, options);


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
                rightcircle.backgroundColor = 'black';

                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'var(--valotopcircle)';
                leftcircle.left = '50%';
                leftcircle.top = '70%';
                headercolor("white");
                body.style.background = 'var(--valobg)';
            }
            if (onWork.length) {
                rightcircle.top = '-300%';
                // rightcircle.backgroundColor = 'orange';
                if (window.innerWidth <= 980) {
                    leftcircle.top = '-64%';
                    leftcircle.width = '80vmax';
                    leftcircle.left = '50%';
                }
                else {
                    leftcircle.width = '45vmax';
                    leftcircle.left = '50%';
                    leftcircle.top = '-65rem'
                }

                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'var(--valotopcircle)';
                body.style.backgroundColor = 'var(--valosilverbg)';
                body.style.color = 'white';
                headercolor("white");
            }
            if (onWork2.length) {
                rightcircle.width = '130vmax';
                rightcircle.top = '-100vmax';
                rightcircle.left = '50%';
                rightcircle.transform = 'translateX(-50%)';
                rightcircle.backgroundColor = 'black';
                if (window.innerWidth <= 980) {
                    leftcircle.top = '-64%';
                    leftcircle.width = '80vmax';
                    leftcircle.left = '50%';
                }
                else {
                    leftcircle.width = '45vmax';
                    leftcircle.left = '50%';
                    leftcircle.top = '-65rem'
                }
                body.style.backgroundColor = '#12141d';
                body.style.color = 'var(--headgreen)';
                leftcircle.backgroundColor = 'var(--bgwhengreen)';
                headercolor("var(--headgreen)");
            }
            if (onWork3.length) {
                rightcircle.top = '-300%';
                if (window.innerWidth <= 980) {
                    leftcircle.top = '-64%';
                    leftcircle.width = '80vmax';
                    leftcircle.left = '50%';
                }
                else {
                    leftcircle.width = '45vmax';
                    leftcircle.left = '50%';
                    leftcircle.top = '-65rem'
                }
                body.style.color = 'white';
                body.style.backgroundColor = 'var(--castlepink)';
                leftcircle.backgroundColor = 'black';
                headercolor("white");
            }
            if (onContact.length) {
                leftcircle.transform = 'translateX(-50%)';
                leftcircle.backgroundColor = 'yellow';
                leftcircle.left = '50%';
                leftcircle.top = '70%'
                body.style.color = 'white';
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