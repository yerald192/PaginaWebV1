/**
 * Local Component - JavaScript
 * Maneja el slider interactivo de fotos de la sede y el mapa.
 */
function initLocalSlider() {
  const slides = [
    document.getElementById('localSlide0'),
    document.getElementById('localSlide1')
  ];
  const dots = [
    document.getElementById('localDot0'),
    document.getElementById('localDot1')
  ];

  if (!slides[0] || !dots[0]) return;

  let currentIndex = 0;
  let autoTimer = null;

  function showSlide(index) {
    currentIndex = index;
    slides.forEach((s, i) => {
      if (s) {
        if (i === index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      }
    });

    dots.forEach((d, i) => {
      if (d) {
        if (i === index) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      }
    });
  }

  dots.forEach((dot, i) => {
    if (dot) {
      dot.onclick = () => {
        showSlide(i);
        restartTimer();
      };
    }
  });

  function startTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    }, 5000);
  }

  function restartTimer() {
    clearInterval(autoTimer);
    startTimer();
  }

  startTimer();
}

document.addEventListener('DOMContentLoaded', initLocalSlider);
window.initLocalSlider = initLocalSlider;
