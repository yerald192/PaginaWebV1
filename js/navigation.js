/**
 * Navigation Router - IESTP Huanta
 * Controla la transición y alternancia dinámica entre Inicio y Organización Institucional.
 */
document.addEventListener('DOMContentLoaded', () => {
  const inicioSection = document.getElementById('inicioSection');
  const organizacionSection = document.getElementById('organizacionSection');
  const menuNav = document.getElementById('headerMenuNav');
  const mobileToggle = document.getElementById('headerMobileToggle');

  function showView(viewName) {
    if (viewName === 'organizacion-institucional') {
      if (inicioSection) inicioSection.style.display = 'none';
      if (organizacionSection) {
        organizacionSection.style.display = 'block';
      }
    } else {
      if (organizacionSection) {
        organizacionSection.style.display = 'none';
      }
      if (inicioSection) {
        inicioSection.style.display = 'block';
      }
    }

    // Cerrar menú móvil si está desplegado
    if (menuNav && menuNav.classList.contains('active')) {
      menuNav.classList.remove('active');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }

    // Scroll suave hacia la parte superior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'organizacion-institucional') {
      showView('organizacion-institucional');
    } else if (hash === 'inicio' || hash === '') {
      showView('inicio');
    }
  }

  // Interceptar clics de navegación
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');

    if (href === '#organizacion-institucional') {
      e.preventDefault();
      history.pushState(null, '', '#organizacion-institucional');
      showView('organizacion-institucional');
    } else if (
      href === '#inicio' || 
      link.classList.contains('breadcrumb-home-link') ||
      (link.classList.contains('header-brand-logo-link') && (href === '#' || href === '#inicio'))
    ) {
      e.preventDefault();
      history.pushState(null, '', '#inicio');
      showView('inicio');
    }
  });

  window.addEventListener('hashchange', handleHash);
  window.addEventListener('popstate', handleHash);

  // Inicializar al cargar la página
  handleHash();
});
