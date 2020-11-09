// displaying menu on mobile
var toggle = document.getElementById("hamburger");
var menu_links = document.getElementById("menu-links")

toggle.addEventListener("click", function () {
    menu_links.classList.toggle("show_links");
});

// adding active class on click / closing menu
menu_link = document.querySelectorAll(".menu__link");

function linkActive() {
    menu_link.forEach(n => n.classList.remove('active'));
    this.classList.add("active");

    menu_links.classList.toggle("show_links");
}

menu_link.forEach(n => n.addEventListener("click", linkActive))

// TODO switching active class when scrolling