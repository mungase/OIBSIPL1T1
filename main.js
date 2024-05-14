const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElememtById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.addEventList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});
const headerImage = document.querySelector("/assets/header.png");
headerImage.addEventListener(
    "animationed",
    (e) => {
        setTimeout(()=>{
            headerImage.classList.add("reveal");
        });
    },
    {once: true }
);
const scrollRevealoption = {
    distance :"50px",
    origin: "bottom",
    duration : 1000 ,
};

scrollReveal().reveal(".header__content h1",{
    ...scrollRevealoption,
    delay: 1500,
});
scrollReveal().reveal(".header__content h2",{
    ...scrollRevealoption,
    delay: 2000,
});
scrollReveal().reveal(".header__content p",{
    ...scrollRevealoption,
    delay: 2500,
});
scrollReveal().reveal(".header__content div",{
    ...scrollRevealoption,
    delay: 3000,
});
scrollReveal().reveal(".header .nav__links",{
    delay: 3500,
});