document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sideMenuToggle = document.querySelector('.side-menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuClose = document.querySelector('.side-menu-close');
    const sideMenuOverlay = document.querySelector('.side-menu-overlay');

    // Original menu toggle for mobile navigation
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Side menu toggle functionality
    function openSideMenu() {
        if (sideMenu && sideMenuOverlay) {
            sideMenu.classList.add('active');
            sideMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        }
    }

    function closeSideMenu() {
        if (sideMenu && sideMenuOverlay) {
            sideMenu.classList.remove('active');
            sideMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scrolling
        }
    }

    // Event listeners for side menu
    if (sideMenuToggle) {
        sideMenuToggle.addEventListener('click', openSideMenu);
    }

    if (sideMenuClose) {
        sideMenuClose.addEventListener('click', closeSideMenu);
    }

    if (sideMenuOverlay) {
        sideMenuOverlay.addEventListener('click', closeSideMenu);
    }

    // Close side menu with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeSideMenu();
        }
    });

    // Close side menu when clicking on a link (for better UX)
    const sideMenuLinks = document.querySelectorAll('.side-menu-links a');
    sideMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Add a small delay to allow navigation to complete
            setTimeout(closeSideMenu, 100);
        });
    });
});
