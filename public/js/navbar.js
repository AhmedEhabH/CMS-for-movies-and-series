function navBar() {
    var button = document.getElementById('nav_btn');
    var navbarNav = document.getElementById('navbarNav');
    console.log(button);
    console.log(navbarNav);
    if (button.className === "navbar-toggler collapsed") {
        button.className = "navbar-toggler";
        button.setAttribute('aria-expanded', 'true');
        navbarNav.className = "navbar-collapse collapse show";
    }
    else {
        button.className = "navbar-toggler collapsed";
        button.setAttribute('aria-expanded', 'false');
        navbarNav.className = "navbar-collapse collapse";
    }
}