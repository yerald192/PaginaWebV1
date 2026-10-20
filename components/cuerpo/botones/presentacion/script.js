/**
 * IESTP Huanta - Presentación
 * Funcionalidad interactiva: Modal del video institucional y contador de años animado
 */

function initPresentacionView() {
  // 1. Control del Modal del Video
  const playVideoBtn = document.getElementById('playVideoBtn');
  const videoModal = document.getElementById('videoModal');
  const closeVideoBtn = document.getElementById('closeVideoBtn');
  const institutionVideo = document.getElementById('institutionVideo');

  const openModal = () => {
    if (!videoModal) return;
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (institutionVideo) {
      institutionVideo.currentTime = 0;
      institutionVideo.play().catch(() => {});
    }
  };

  const closeModal = () => {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (institutionVideo) {
      institutionVideo.pause();
    }
  };

  if (playVideoBtn) {
    playVideoBtn.onclick = openModal;
  }

  if (closeVideoBtn) {
    closeVideoBtn.onclick = closeModal;
  }

  if (videoModal) {
    videoModal.onclick = (e) => {
      if (e.target === videoModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 2. Animación del contador de años (39)
  const counterEl = document.getElementById('counterNumber');
  if (counterEl) {
    const target = 39;
    let current = 0;
    const duration = 1100;
    const stepTime = Math.abs(Math.floor(duration / target));
    counterEl.textContent = '0';

    const timer = setInterval(() => {
      current += 1;
      counterEl.textContent = current;
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}

document.addEventListener('DOMContentLoaded', initPresentacionView);
window.initPresentacionView = initPresentacionView;
