/**
 * Footer Component JavaScript
 * Maneja el botón de desplazamiento suave hacia arriba y el año dinámico.
 */

document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('footerScrollTop');
  const yearEl = document.getElementById('currentYear');

  // Asegurar año actual si no está establecido
  if (yearEl && !yearEl.textContent.trim()) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Comportamiento del botón de volver arriba
  if (scrollTopBtn) {
    // Mostrar u ocultar dependiendo de la posición del scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
        scrollTopBtn.style.transform = 'translateY(0)';
      } else {
        scrollTopBtn.style.opacity = '0.6';
        scrollTopBtn.style.transform = 'translateY(0)';
      }
    });

    // Desplazamiento suave al hacer clic
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
