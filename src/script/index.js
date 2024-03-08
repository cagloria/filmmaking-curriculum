import { toggleNav, setNavState, media } from "./navigation.js";
import { contactSetUp } from "./contact.js";

window.addEventListener("load", () => {
    const navButton = document.getElementById("nav-menu-button");
    const navOverlay = document.getElementById("nav-overlay");

    [navButton, navOverlay].forEach((element) => {
        element.addEventListener("click", () => {
            toggleNav();
        });
    });

    setNavState(!media.matches);

    document.addEventListener("scroll", (e) => {
        if (navButton.getAttribute("aria-expanded") === "true") {
            toggleNav();
        }
    });

    contactSetUp();
});
