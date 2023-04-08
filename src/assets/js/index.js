(function () {
    const header = document.getElementById("header");
    const tabsContainer = document.querySelectorAll(".tabs");
    const handleTabs = (element) => {
        const tabslist = element.querySelector(".tabs-list");
        const tabs = tabslist.querySelectorAll(".tabs-link");

        tabs.forEach((tab) => {
            tab.addEventListener("click", onTabClick);
        });

        function onTabClick(e) {
            const currentTab = tabslist.querySelector('.tabs-link-active');

            if (e.currentTarget !== currentTab) {
                switchTab(currentTab, e.currentTarget);
            }
        }
    };

    tabsContainer.forEach((element) => handleTabs(element));

    document.addEventListener("scroll", onScroll);

    function switchTab(oldTab, newTab) {
        newTab.focus();
        newTab.classList.add('tabs-link-active');
        oldTab.classList.remove('tabs-link-active');
    }

    function onScroll(e) { }
})();