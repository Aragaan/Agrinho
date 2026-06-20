/* ==================================================
   AGRINHO V3
   PREMIUM INTERACTIONS
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTOS
    ========================================== */

    const header = document.querySelector("header");
    const mobileBtn = document.querySelector("#mobile-btn");
    const nav = document.querySelector("nav");

    const backToTop = document.querySelector("#backToTop");
    const progressBar = document.querySelector(".scroll-progress");

    /* ==========================================
       HEADER SCROLL
    ========================================== */

    function updateHeader() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    /* ==========================================
       MOBILE MENU
    ========================================== */

    if (mobileBtn) {

        mobileBtn.addEventListener("click", () => {

            nav.classList.toggle("active");
            mobileBtn.classList.toggle("active");

        });

    }

    /* ==========================================
       FECHAR MENU AO CLICAR
    ========================================== */

    document.querySelectorAll('nav a').forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            if (mobileBtn) {
                mobileBtn.classList.remove("active");
            }

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 80,
                behavior: "smooth"

            });

        });

    });

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function activeSection() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 200;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active-link");

            }

        });

    }

    window.addEventListener("scroll", activeSection);

    /* ==========================================
       PROGRESS BAR
    ========================================== */

    function updateProgress() {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / height) * 100;

        progressBar.style.width =
            progress + "%";

    }

    window.addEventListener(
        "scroll",
        updateProgress
    );

    /* ==========================================
       BACK TO TOP
    ========================================== */

    function showBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        showBackToTop
    );

    backToTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }
    );

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

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

    /* ==========================================
       COUNTERS
    ========================================== */

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
                        parseInt(
                            counter.dataset.target
                        );

                    let current = 0;

                    const speed =
                        target / 120;

                    function updateCounter() {

                        current += speed;

                        if (current < target) {

                            counter.textContent =
                                Math.floor(current);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString(
                                    "pt-BR"
                                );

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

    /* ==========================================
       HERO PARALLAX
    ========================================== */

    const hero =
        document.querySelector(".hero");

    function heroParallax() {

        if (!hero) return;

        const offset =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.35 + "px";

    }

    window.addEventListener(
        "scroll",
        heroParallax
    );

    /* ==========================================
       CARD STAGGER
    ========================================== */

    const cards = document.querySelectorAll(

        ".area-card, \
        .innovation-card, \
        .number-card, \
        .market-card, \
        .flow-item, \
        .sustainability-card"

    );

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

    /* ==========================================
       IMAGE ZOOM
    ========================================== */

    document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "mouseenter",
            () => {

                image.style.transition =
                    "transform .5s ease";

            }
        );

    });

    /* ==========================================
       LOAD EFFECT
    ========================================== */

    document.body.classList.add(
        "loaded"
    );

    /* ==========================================
       INIT
    ========================================== */

    updateHeader();
    updateProgress();
    activeSection();
    showBackToTop();

});

console.log(`
🌱 AGRINHO V3

✓ Agro em Números
✓ AgTech
✓ Mercado Financeiro
✓ Sustentabilidade
✓ Profissões do Futuro
✓ Scroll Reveal
✓ Counter Animation
✓ Parallax Hero

Sistema carregado.
`);
