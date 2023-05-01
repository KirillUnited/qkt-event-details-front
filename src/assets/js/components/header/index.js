const header = (config = {}) => {
    const model = {
        elementId: "header",
        sideNavSelector: '[data-element="sidenav"]',
        contentHeadingSelector: "[data-content-heading]"
    };
    const {elementId, sideNavSelector, contentHeadingSelector} = Object.assign(model, config);
    const element = document.getElementById(elementId);
    const sideNav = element?.querySelector(sideNavSelector);
    const contentHeading = document.querySelector(contentHeadingSelector);
    const headerHandler = () => {
        if (scrollY >= contentHeading.offsetTop - 120) {
            element?.classList.add("isScroll");
        } else {
            element?.classList.remove("isScroll");
        }
    };

    document.addEventListener("scroll", onScroll);
    element?.addEventListener('click', onClick);

    function onScroll(e) {
        contentHeading && headerHandler();
    }

    function onClick(e) {
        const menuBtn = e.target.closest('[data-element="menuBtn"]');

        if (menuBtn || (e.target === sideNav)) {
            sideNav.classList.toggle('isOpen');
        }
    }
};

export default header;
