const header = (config = {}) => {
    const model = {
        elementId: "header",
        sideNavSelector: '[data-element="sidenav"]',
        menuBtnSelector: '[data-element="menuBtn"]',
        contentHeadingSelector: "[data-content-heading]"
    };
    const {
        elementId,
        sideNavSelector,
        menuBtnSelector,
        contentHeadingSelector
    } = Object.assign(model, config);
    const element = document.getElementById(elementId);
    const sideNav = element?.querySelector(sideNavSelector);
    const contentHeading = document.querySelector(contentHeadingSelector);

    document.addEventListener("scroll", onScroll);
    element?.addEventListener('click', onClick);

    function onScroll(e) {
        if (!contentHeading) {
            document.removeEventListener("scroll", onScroll);
            return;
        }

        if (scrollY >= contentHeading.offsetTop - 120) {
            element?.classList.add("isScroll");
        } else {
            element?.classList.remove("isScroll");
        }
    }

    function onClick(e) {
        const menuBtn = e.target.closest(menuBtnSelector);

        if (menuBtn || (e.target === sideNav)) {
            sideNav.classList.toggle('isOpen');
        }
    }
};

export default header;
