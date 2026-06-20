const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const mobileBtn = document.getElementById("mobile-btn");
const nav = document.getElementById("nav");

mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
