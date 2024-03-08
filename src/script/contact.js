const contactOptions = [
    {
        tabID: "contact-option--curriculum",
        panelID: "contact-panel--curriculum",
    },
    {
        tabID: "contact-option--questions",
        panelID: "contact-panel--questions",
    },
    {
        tabID: "contact-option--business",
        panelID: "contact-panel--business",
    },
];

/**
 * Set up onclick functionality for each contact tab.
 */
export function contactSetUp() {
    contactOptions.forEach((option) => {
        const tab = document.getElementById(option.tabID);
        const panel = document.getElementById(option.panelID);

        tab.addEventListener("click", () => {
            switchPanel(option);
        });

        if (tab.getAttribute("aria-selected") === "false") {
            panel.classList.add("contact-panel--hidden");
        }
    });
}

/**
 * Switch the panel to the specified tab in the contact section.
 * @param {object} option   An object with tabID and panelID
 */
function switchPanel(option) {
    const tab = document.getElementById(option.tabID);

    contactOptions.forEach((element) => {
        const tab = document.getElementById(element.tabID);
        tab.setAttribute("aria-selected", "false");
    });
    tab.setAttribute("aria-selected", "true");

    contactOptions.forEach((element) => {
        const tab = document.getElementById(element.tabID);
        const panel = document.getElementById(element.panelID);

        if (tab.getAttribute("aria-selected") === "false") {
            panel.classList.add("contact-panel--hidden");
        } else {
            panel.classList.remove("contact-panel--hidden");
        }
    });
}
