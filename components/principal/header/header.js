document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('headerMobileToggle');
  const menuNav = document.getElementById('headerMenuNav');

  if (!menuNav) return;

  const menuItems = menuNav.querySelectorAll('.header-menu-item');
  const menuItemsWithDropdown = Array.from(menuItems).filter(item => item.querySelector('.header-dropdown-menu'));

  // Función para cerrar todos los dropdowns y el menú móvil
  function closeAllDropdowns() {
    menuItems.forEach(item => {
      item.classList.remove('active');
      item.classList.add('dropdown-closed');
      
      // Permitir que vuelva a abrirse cuando el usuario mueva el ratón fuera
      const onLeave = () => {
        item.classList.remove('dropdown-closed');
        item.removeEventListener('mouseleave', onLeave);
      };
      item.addEventListener('mouseleave', onLeave);

      // Timeout de seguridad para limpiar el estado
      setTimeout(() => {
        item.classList.remove('dropdown-closed');
      }, 350);
    });

    if (menuNav.classList.contains('active')) {
      menuNav.classList.remove('active');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }

    // Quitar el foco para evitar que :focus-within lo mantenga visible
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }

  window.closeHeaderDropdowns = closeAllDropdowns;

  // 1. Abrir / Cerrar menú hamburguesa en móvil
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      menuNav.classList.toggle('active');
    });
  }

  // 2. Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!menuNav.contains(e.target) && (!mobileToggle || !mobileToggle.contains(e.target))) {
      closeAllDropdowns();
    }
  });

  // 3. En pantallas táctiles o móviles, alternar dropdowns al tocar el título principal
  menuItemsWithDropdown.forEach((item) => {
    const link = item.querySelector('.header-menu-link');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 980) {
          e.preventDefault();
          const wasActive = item.classList.contains('active');
          menuItemsWithDropdown.forEach(i => i.classList.remove('active'));
          if (!wasActive) {
            item.classList.remove('dropdown-closed');
            item.classList.add('active');
          }
        }
      });
    }
  });

  // 4. CRÍTICO: Al tocar o hacer clic en cualquier opción del dropdown, cerrarlo inmediatamente
  const dropdownLinks = menuNav.querySelectorAll('.header-dropdown-item a');
  dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeAllDropdowns();
    });
  });

  // 5. Al hacer clic en cualquier enlace principal sin desplegable (ej. Inicio)
  const directLinks = menuNav.querySelectorAll('.header-menu-item:not(:has(.header-dropdown-menu)) .header-menu-link');
  directLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeAllDropdowns();
    });
  });
});
