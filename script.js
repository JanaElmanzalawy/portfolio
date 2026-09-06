/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileNavigation =
    document.getElementById("mobileNavigation");


/* =====================================================
   OPEN / CLOSE MENU
===================================================== */

mobileMenuBtn.addEventListener("click", () => {

    mobileNavigation.classList.toggle("open");


    const icon =
        mobileMenuBtn.querySelector("i");


    if (
        mobileNavigation.classList.contains("open")
    ) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

        mobileMenuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

        mobileMenuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =====================================================
   CLOSE AFTER CLICKING A LINK
===================================================== */

document
    .querySelectorAll(".mobile-navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");


            const icon =
                mobileMenuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


            mobileMenuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", event => {

    if (

        !mobileNavigation.contains(event.target)

        &&

        !mobileMenuBtn.contains(event.target)

    ) {

        mobileNavigation.classList.remove("open");


        const icon =
            mobileMenuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");


        mobileMenuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const desktopLinks =
    document.querySelectorAll(".navigation a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 140;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop
            &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    desktopLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});