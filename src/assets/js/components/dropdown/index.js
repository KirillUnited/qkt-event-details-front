const dropdown = (config = {}) => {
    const {
        elementSelector = '.dropdown',
        showButtonSelector = '[data-toggle="dropdown"]',
        showClassName = 'dropdown-show'
    } = Object.assign({}, config);
    let current = null;
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length === 0) return;
    const showButtons = document.querySelectorAll(showButtonSelector);

    showButtons.forEach((btn) => btn.addEventListener('click', show));
    document.addEventListener('click', hide);

    function show(e) {
        e.preventDefault();
        const target = this.closest(elementSelector);

        current && current.classList.remove(showClassName);
        current = target;
        target.classList.toggle(showClassName);
    }

    function hide(e) {
        elements.forEach((dropdown) => {
            const target = e.target.closest(elementSelector);

            if (target) return;
            dropdown.classList.remove(showClassName);
        });
    }
};

export default dropdown;
