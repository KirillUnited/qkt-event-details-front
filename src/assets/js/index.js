(function () {
    const header = document.getElementById("header");
    const tabsContainer = document.querySelectorAll(".tabs");
    const tabsPanel = document.querySelectorAll('[data-panel]');
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
        if(!oldTab && !newTab) return;

        newTab.classList.add('tabs-link-active');
        oldTab.classList.remove('tabs-link-active');
    }

    function onScroll(e) {
        const tabsContainer = document.querySelector(".tabs");
        const tabslist = tabsContainer.querySelector(".tabs-list");
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

            tab.classList.remove('tabs-link-active');

            if(newTab){
                newTab.classList.add('tabs-link-active');
            }
        });
    }
})();