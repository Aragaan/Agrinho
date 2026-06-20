```javascript
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const mobileBtn = document.getElementById("mobile-btn");
const backToTop = document.getElementById("backToTop");
const progressBar = document.querySelector(".scroll-progress");

/* ==========================
HEADER + BACK TO TOP
========================== */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

/* ==========================
SCROLL PROGRESS BAR
========================== */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================
MENU MOBILE
========================== */

mobileBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    mobileBtn.classList.toggle("active");

});

/* ==========================
FECHAR MENU AO CLICAR
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    });

});

/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

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

/* ==========================
BOTÃO VOLTAR AO TOPO
========================== */

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================
MENU ATIVO AUTOMÁTICO
========================== */

const sections =
    document.querySelectorAll("section[id]");

const menuLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

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

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active-link");

        }

    });

});

/* ==========================
ANIMAÇÃO DOS CARDS
========================== */

const cards =
    document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});

/* ==========================
EFEITO PARALLAX SUAVE HERO
========================== */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            offset * 0.4 + "px";

    }

});

/* ==========================
ANIMAÇÃO DE CONTADORES
========================== */

const statNumbers =
    document.querySelectorAll(".stat-card h3");

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const element =
                    entry.target;

                const finalText =
                    element.textContent;

                const finalNumber =
                    parseInt(
                        finalText.replace(/\D/g, "")
                    );

                if (isNaN(finalNumber)) return;

                let current = 0;

                const increment =
                    finalNumber / 80;

                const updateCounter = () => {

                    current += increment;

                    if (current < finalNumber) {

                        element.textContent =
                            "+" +
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        element.textContent =
                            finalText;

                    }

                };

                updateCounter();

                counterObserver.unobserve(
                    element
                );

            });

        },

        {
            threshold: 0.5
        }

    );

statNumbers.forEach(number => {

    counterObserver.observe(number);

});

/* ==========================
ENTRADA SUAVE DA PÁGINA
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
TECLA ESC FECHA MENU
========================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        nav.classList.contains("active")
    ) {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    }

});

/* ==========================
CLIQUE FORA FECHA MENU
========================== */

document.addEventListener("click", (event) => {

    const clickInsideNav =
        nav.contains(event.target);

    const clickButton =
        mobileBtn.contains(event.target);

    if (
        !clickInsideNav &&
        !clickButton &&
        nav.classList.contains("active")
    ) {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    }

});

/* ==========================
SMOOTH LOADING
========================== */

document.documentElement.style.scrollBehavior =
    "smooth";

console.log(
    "%c🌱 Agrinho Premium carregado com sucesso!",
    "color:#2e8b57;font-size:14px;font-weight:bold;"
);
```
