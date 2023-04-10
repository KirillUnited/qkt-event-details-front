const header = () => {
    const header = document.getElementById("header");
    const handleHeader = () => {
        const contentHeading = document.querySelector(".content-heading");

        if (scrollY >= contentHeading.offsetTop - 120) {
            header.classList.add("isScroll");
        } else {
            header.classList.remove("isScroll");
        }
    };

    document.addEventListener("scroll", onScroll);

    function onScroll(e) {
        handleHeader();
    }
}

export default header;