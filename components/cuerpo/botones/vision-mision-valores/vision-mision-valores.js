/**
 * Visión, Misión y Valores - JavaScript
 * Maneja el cambio interactivo entre pestañas (Nuestra Misión, Nuestra Visión, Valores Institucionales).
 */
function initVisionMisionTabs() {
  const tabButtons = document.querySelectorAll('.vm-tab-btn');
  const tabPanes = document.querySelectorAll('.vm-tab-pane');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.onclick = () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      // Actualizar estado de botones
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Actualizar visibilidad de paneles
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    };
  });
}

document.addEventListener('DOMContentLoaded', initVisionMisionTabs);
window.initVisionMisionTabs = initVisionMisionTabs;
