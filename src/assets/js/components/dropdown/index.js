const dropdown = () => {
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
};

export default dropdown;