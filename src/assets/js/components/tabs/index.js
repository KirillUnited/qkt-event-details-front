const tabs = (config = {}) => {
    const {
        containerSelector = ".tabs",
        panelSelector = '[data-panel]',
        listSelector = ".tabs-list",
        tabSelector = ".tabs-link",
        sectionTopDiff = 300,
        activeClassName = 'tabs-link-active'
    } = Object.assign({}, config);
    const containers = document.querySelectorAll(containerSelector);
    const panels = document.querySelectorAll(panelSelector);
    const handleTabs = (element) => {
        const tabslist = element.querySelector(listSelector);
        const tabs = tabslist?.querySelectorAll(tabSelector);
        let current = null;

        panels?.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (scrollY >= sectionTop - sectionTopDiff) {
                current = section.getAttribute("id");
            }
        });

        tabs?.forEach((tab) => {
            const newTab = tabslist.querySelector(`[href="#${current}"]`);

            switchTab(tab, newTab);
        });
    };

    document.addEventListener("scroll", onScroll);

    function onScroll(e) {
        containers?.forEach((element) => handleTabs(element));
    }

    function switchTab(oldTab, newTab) {
        oldTab.classList.remove(activeClassName);

        if (newTab) {
            newTab.classList.add(activeClassName);
        }
    }
};

export default tabs;
