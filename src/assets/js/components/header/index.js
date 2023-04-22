const header = () => {
    const header = document.getElementById("header");
    const sideNav = header?.querySelector('.header-sidenav');
    const contentHeading = document.querySelector(".content-heading");
    const headerHandler = () => {
        if (scrollY >= contentHeading.offsetTop - 120) {
            header?.classList.add("isScroll");
        } else {
            header?.classList.remove("isScroll");
        }
    };

    document.addEventListener("scroll", onScroll);
    header?.addEventListener('click', onClick);

    function onScroll(e) {
        contentHeading && headerHandler();
    }

    function onClick(e) {
        const menuBtn = e.target.closest('.header-menu-btn');

        if (menuBtn || (e.target === sideNav)) {
            sideNav?.classList.toggle('isOpen');
        }
    }
};

export default header;
