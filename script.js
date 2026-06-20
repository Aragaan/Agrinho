/* =====================================
ELEMENTOS
===================================== */

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const mobileBtn = document.getElementById("mobile-btn");
const backToTop = document.getElementById("backToTop");
const progressBar = document.querySelector(".scroll-progress");

const menuLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");

/* =====================================
HEADER INTELIGENTE
===================================== */

function handleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

/* =====================================
PROGRESS BAR
===================================== */

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

}

window.addEventListener("scroll", updateProgressBar);

/* =====================================
BOTÃO VOLTAR AO TOPO
===================================== */

function handleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", handleBackToTop);

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* =====================================
MENU MOBILE
===================================== */

mobileBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    mobileBtn.classList.toggle("active");

});

document.addEventListener("click", (event) => {

    const clickedInsideNav =
        nav.contains(event.target);

    const clickedButton =
        mobileBtn.contains(event.target);

    if (
        !clickedInsideNav &&
        !clickedButton &&
        nav.classList.contains("active")
    ) {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    }

});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        nav.classList.contains("active")
    ) {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    }

});

/* =====================================
SMOOTH SCROLL
===================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        const offset = 80;

        const topPosition =
            target.offsetTop - offset;

        window.scrollTo({

            top: topPosition,
            behavior: "smooth"

        });

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    });

});

/* =====================================
MENU ATIVO
===================================== */

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener("scroll", updateActiveMenu);

/* =====================================
SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* =====================================
COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );

                let current = 0;

                const duration = 2000;

                const increment =
                    target /
                    (duration / 16);

                function updateCounter() {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }

                updateCounter();

                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.5
        }

    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* =====================================
PARALLAX HERO
===================================== */

const hero =
    document.querySelector(".hero");

function parallaxHero() {

    if (!hero) return;

    const offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.35 + "px";

}

window.addEventListener(
    "scroll",
    parallaxHero
);

/* =====================================
EFEITO SUAVE NOS CARDS
===================================== */

const cards =
    document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});

/* =====================================
ANIMAÇÃO DE ENTRADA
===================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

/* =====================================
INICIALIZAÇÃO
===================================== */

handleHeader();
updateProgressBar();
handleBackToTop();
updateActiveMenu();

/* =====================================
LOG
===================================== */

console.log(
    "%c🌱 AGRINHO - SITE CARREGADO",
    "color:#2e8b57;font-size:14px;font-weight:bold;"
);
