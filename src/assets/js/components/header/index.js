const header = () => {
    const element = document.getElementById("header");
    const sideNav = element?.querySelector('[data-element="sidenav"]');
    const contentHeading = document.querySelector("[data-content-heading]");
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
