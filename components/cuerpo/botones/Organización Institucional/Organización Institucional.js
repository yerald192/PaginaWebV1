/**
 * Organización Institucional - JavaScript
 * Maneja la interacción del modal lightbox para ampliar el organigrama.
 */
document.addEventListener('DOMContentLoaded', () => {
  const organigramaImg = document.getElementById('organigramaImage');
  const modal = document.getElementById('organigramaModal');
  const modalClose = document.getElementById('organigramaModalClose');

  if (organigramaImg && modal) {
    // Abrir modal
    organigramaImg.addEventListener('click', () => {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });

    // Cerrar con botón
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        closeModal();
      });
    }

    // Cerrar al hacer clic en el fondo oscuro
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
});
