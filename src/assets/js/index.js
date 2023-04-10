// Header, Tabs
import "../styles/qkt-events.scss";
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
// Dropdown
(function () {
    let current = null;
    const elements = document.querySelectorAll('.dropdown');
    if (elements.length === 0) return;
    const showButtons = document.querySelectorAll('[data-toggle="dropdown"]');

    showButtons.forEach((btn) => btn.addEventListener('click', show));
    document.addEventListener('click', hide);

    function show(e) {
        e.preventDefault();
        const target = this.closest('.dropdown');

        current && current.classList.remove('dropdown-show');
        current = target;
        target.classList.toggle('dropdown-show');
    }

    function hide(e) {
        elements.forEach((dropdown) => {
            const target = e.target.closest(".dropdown");

            if (target) return;
            dropdown.classList.remove('dropdown-show');
        });
    }
})();