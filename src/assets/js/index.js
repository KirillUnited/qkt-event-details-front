(function () {
    const header = document.getElementById("header");
    const tabsContainer = document.querySelector(".tabs");
    const tabslist = tabsContainer.querySelector(".tabs-list");
    const tabs = tabslist.querySelectorAll(".tabs-link");

    document.addEventListener("scroll", onScroll);

    tabs.forEach((tab) => {
        tab.addEventListener("click", onTabClick);
    });

    function onTabClick(e) {
        const currentTab = tabslist.querySelector('.tabs-link-active');

        if (e.currentTarget !== currentTab) {
            switchTab(currentTab, e.currentTarget);
        }
    }

    function switchTab(oldTab, newTab) {
        newTab.focus();
        newTab.classList.add('tabs-link-active');
        oldTab.classList.remove('tabs-link-active');
    }

    function onScroll(e) { }
})();