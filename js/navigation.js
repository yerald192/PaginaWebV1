/**
 * Navigation Router - IESTP Huanta
 * Controla la transición dinámica entre Inicio, Presentación, Organización Institucional, Plana Jerárquica y demás vistas.
 */
document.addEventListener('DOMContentLoaded', () => {
  const views = {
    'inicio': document.getElementById('inicioSection'),
    'presentacion': document.getElementById('presentacionSection'),
    'organizacion-institucional': document.getElementById('organizacionSection'),
    'plana-jerarquica': document.getElementById('planaJerarquicaSection')
  };

  const menuNav = document.getElementById('headerMenuNav');
  const mobileToggle = document.getElementById('headerMobileToggle');

  function showView(viewKey) {
    const activeKey = views[viewKey] ? viewKey : 'inicio';

    Object.keys(views).forEach(key => {
      const el = views[key];
      if (el) {
        if (key === activeKey) {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      }
    });

    // Si la vista es presentación, ejecutar la animación del contador y configurar video
    if (activeKey === 'presentacion' && typeof window.initPresentacionView === 'function') {
      window.initPresentacionView();
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
    const hash = window.location.hash.replace('#', '').trim();
    if (views[hash]) {
      showView(hash);
    } else {
      showView('inicio');
    }
  }

  // Interceptar clics de navegación
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      const targetHash = href.replace('#', '').trim();

      if (views[targetHash]) {
        e.preventDefault();
        history.pushState(null, '', '#' + targetHash);
        showView(targetHash);
        return;
      }

      if (
        targetHash === 'inicio' || 
        link.classList.contains('breadcrumb-home-link') ||
        (link.classList.contains('header-brand-logo-link') && (href === '#' || href === '#inicio'))
      ) {
        e.preventDefault();
        history.pushState(null, '', '#inicio');
        showView('inicio');
        return;
      }
    }
  });

  window.addEventListener('hashchange', handleHash);
  window.addEventListener('popstate', handleHash);

  // Inicializar vista al cargar la página
  handleHash();
});
