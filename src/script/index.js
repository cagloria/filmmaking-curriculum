const media = window.matchMedia("(max-width: 768px)");

window.addEventListener("load", (e) => {
    setNavState(!media.matches);
});

media.onchange = (e) => {
    const button = document.getElementById("nav-menu-button");

    setNavState(!e.matches);

    // Closes navigation button on changing to desktop layout
    if (button.getAttribute("aria-expanded") === "true") {
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation");
    }
};

/**
 * Toggle navigation between desktop and mobile
 */
function toggleNav() {
    const button = document.getElementById("nav-menu-button");

    if (button.getAttribute("aria-expanded") === "true") {
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation");
        setNavLinksTabindex(false);
    } else {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close navigation");
        setNavLinksTabindex(true);
    }
}

/**
 * Set the initial accessibility attributes for navigation button and links.
 * @param {boolean} isDesktop   Page is on desktop layout
 */
function setNavState(isDesktop) {
    const button = document.getElementById("nav-menu-button");

    button.setAttribute("aria-hidden", `${isDesktop}`);
    button.setAttribute("tabindex", isDesktop ? "-1" : "0");
    button.setAttribute("aria-label", "Open navigation");

    setNavLinksTabindex(isDesktop);
}

/**
 * Set the tabindex of navigation links.
 * @param {boolean} isDesktopOrExpandedNav  The page is on desktop layout or
 *                                          navigation is expanded
 */
function setNavLinksTabindex(isDesktopOrExpandedNav) {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.setAttribute("tabindex", isDesktopOrExpandedNav ? "0" : "-1");
    });
}
