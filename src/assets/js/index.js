(function () {
    const header = document.getElementById("header");
    const tabsContainer = document.querySelectorAll(".tabs");
    const tabsPanel = document.querySelectorAll('[data-panel]');
    const handleTabs = (element) => {
        const tabslist = element.querySelector(".tabs-list");
        const tabs = tabslist.querySelectorAll(".tabs-link");
        let current = null;

        tabsPanel.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute("id");
            }
        });

        tabs.forEach((tab) => {
            const newTab = tabslist.querySelector(`[href="#${current}"]`);

            switchTab(tab, newTab);
        });
    };
    const handleHeader = () => {
        const contentHeading = document.querySelector(".content-heading");
        const headerNavbar = header.querySelector(".header-navbar");

        if (scrollY >= contentHeading.offsetTop - 120) {
            header.classList.add("isScroll");
        } else {
            header.classList.remove("isScroll");
        }
    };

    document.addEventListener("scroll", onScroll);

    function onScroll(e) {
        tabsContainer.forEach((element) => handleTabs(element));
        handleHeader();
    }

    function switchTab(oldTab, newTab) {
        oldTab.classList.remove('tabs-link-active');

        if (newTab) {
            newTab.classList.add('tabs-link-active');
        }
    }
})();