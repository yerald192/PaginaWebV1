document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('headerMobileToggle');
  const menuNav = document.getElementById('headerMenuNav');

  if (mobileToggle && menuNav) {
    // Abrir / Cerrar menú móvil
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      menuNav.classList.toggle('active');
    });

    // Cerrar al hacer clic fuera en móvil
    document.addEventListener('click', (e) => {
      if (!menuNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        menuNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // En pantallas táctiles o móviles, alternar dropdowns al tocar
    const menuItemsWithDropdown = menuNav.querySelectorAll('.header-menu-item:has(.header-dropdown-menu)');
    menuItemsWithDropdown.forEach((item) => {
      const link = item.querySelector('.header-menu-link');
      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 980) {
            e.preventDefault();
            // Alternar estado activo
            const wasActive = item.classList.contains('active');
            menuItemsWithDropdown.forEach(i => i.classList.remove('active'));
            if (!wasActive) {
              item.classList.add('active');
            }
          }
        });
      }
    });
  }
});
