const header = () => {
    const header = document.getElementById("header");
    const contentHeading = document.querySelector(".content-heading");
    const headerHandler = () => {
        if (scrollY >= contentHeading.offsetTop - 120) {
            header?.classList.add("isScroll");
        } else {
            header?.classList.remove("isScroll");
        }
    };

    document.addEventListener("scroll", onScroll);

    function onScroll(e) {
        contentHeading && headerHandler();
    }
}

export default header;