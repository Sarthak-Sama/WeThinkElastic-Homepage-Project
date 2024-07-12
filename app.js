// ------------------Loader Animation ------------ //
const loader = () => {
    // Disable scrolling by setting overflow hidden on the body
    document.body.style.overflow = 'hidden';

    for (let i = 1; i <= 10; i++) {
        setTimeout((index) => {
            document.querySelector("#loader img").src = `/assets/sticker${index}.svg`;
        }, i * 200, i);
    }

    const tl = gsap.timeline();

    tl.to("#loader", {
        y: "-100%",
        delay: 2.25,
        onComplete: function() {
            // Enable scrolling after the loader animation completes
            document.body.style.overflow = 'auto';
        }
    });

    tl.from("#title span", {
        y: 700,
        duration: 0.5,
        stagger: 0.08
    });
    
    tl.from("#page1 p span", {
        y: 150,
        duration: 0.5,
        stagger: 0.1,
        delay: -0.45
    });

    // Ensuring scrolling is re-enabled if the animation is interrupted or delayed
    tl.set("body", { overflowY: "auto" });
};

loader();





//  --------------------- Nav Bar------------------------------------------------



//  ----------------Responsiveness of NavBar ----------

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 786) {
        navMenu = document.querySelector("#nav-part2");
        navMenu.innerHTML = `<i style="color:#E7CFB1; scale:2; padding-right:2.6vw;" class="ri-menu-fill"></i>`
    }
});

// --------------------- Scroll Animation of NavBar ------------------
let lastScrollTop = 0;
let delta = 5; // Adjust as needed; Determines when the navbar reappears
const navBar = document.querySelector("nav");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return; // If scroll distance is less than delta, do nothing
    }

    if (scrollTop > lastScrollTop) {
        // Scroll down
        gsap.to(navBar, { top: -navBar.offsetHeight, duration: 0.3, ease: "power2.out" }); // Slide navbar up
    } else {
        // Scroll up
        gsap.to(navBar, { top: 0, duration: 0.3, ease: "power2.out" }); // Slide navbar down
    }

    if (scrollTop === 0) {
        // At the top of the page
        navBar.classList.add('scaled');
    } else {
        navBar.classList.remove('scaled');
    }

    lastScrollTop = scrollTop;

});



// ---------------- Video Scrolling ----------------//

if(window.innerWidth > 786){
    gsap.to("#page2 video", {
        height: "100vh",
        width: "100%",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 100%",
            end:  "top 0",
            scrub: 1
        }
    
    });
}


// -----------Expertise Text Scroll Animation ----- //

gsap.from("#page3 .line span", {
    y: 300,
    duration: 1,
    delay: 0.25,
    scrollTrigger: "#page3",
});

gsap.to("#expert-div #text",{
    x: "-58%",
    scrollTrigger: {
        trigger:"#page5",
        scroller: "body",
        start: "top 0",
        end: "top -400%",
        scrub: 1,
        pin:true
    }
})

gsap.to("#expert-div img",{
    x: "-25%",
    scrollTrigger: {
        trigger:"#page5",
        scroller: "body",
        start: "top 0",
        end: "top -400%",
        scrub: 1,
    }
})

// ------------ comapany page ----------------//

const comapanyPage = document.querySelector("#companies");
for(let i = 1; i < 25; i++){
    const logo = document.createElement("img"); 
    logo.src = `assets/companyLogos/logos${i}.svg`;
    logo.classList.add("company-logo");
    comapanyPage.appendChild(logo);
}
// -----------------Coffee Text Animation----------------------- //


gsap.from("#page7 h3", {
    y: 200,
    duration: 1,
    scrollTrigger: {
        trigger:"#page7",
        scroller: "body",
        start: "top 100%",
        end: "top 20%",
        scrub: 1,
    }
})


// --------------Project Grid Cursor and Other Animations ------------------/
const gridCursor = document.querySelector("#grid-cursor");
const grid = document.querySelector("#projects-grid");
const projectMedia = document.querySelectorAll("#projects-grid img, #projects-grid video");

grid.addEventListener("mousemove", (dets) => {
    const rect = grid.getBoundingClientRect();

    const mouseX = dets.clientX - rect.left;
    const mouseY = dets.clientY - rect.top;
    // Updating cursor position
    gsap.to(gridCursor, {
        top: mouseY,
        left: mouseX,
        duration: 0.2,
        ease: "none"
    });
});

// Looping through each img and video element and adding event listeners
projectMedia.forEach((media) => {
    media.addEventListener("mouseenter", () => {
        gridCursor.classList.remove("minimized");
    });

    media.addEventListener("mouseleave", () => {
        gridCursor.classList.add("minimized");
    });
});
