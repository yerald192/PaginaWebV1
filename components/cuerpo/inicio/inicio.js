/**
 * Inicio Component JavaScript
 * Maneja las interacciones del banner slider y las tarjetas de programas.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const heroSlider = document.querySelector('.hero-slider');

  // Diapositivas disponibles (fondos reales descargados del portal)
  const slides = [
    {
      bg: 'assets/images/OKOK.jpg',
      tag: 'INSTITUTO DE EDUCACIÓN SUPERIOR PÚBLICO "HUANTA"',
      title: 'Construye tu futuro con<br>formación de calidad',
      desc: 'El Instituto de Educación Superior Público Huanta se enorgullece de ser un instituto licenciado, lo que garantiza que nuestros programas académicos cumplen con los más altos estándares de calidad establecidos por las autoridades educativas.'
    },
    {
      bg: 'assets/images/h2-bg-slider2-3-1.jpg',
      tag: 'ADMISIONES ABIERTAS',
      title: 'Tu camino al éxito profesional<br>comienza hoy',
      desc: 'Formamos profesionales técnicos altamente capacitados para liderar el desarrollo productivo y tecnológico de nuestra región.'
    }
  ];

  let currentSlideIndex = 0;

  function updateSlide(index) {
    if (!heroSlider) return;
    const slide = slides[index];
    heroSlider.style.backgroundImage = `url('${slide.bg}')`;

    const titleEl = document.querySelector('.hero-main-title');
    const descEl = document.querySelector('.hero-main-desc');
    const tagEl = document.querySelector('.hero-badge-tag');

    if (titleEl) titleEl.innerHTML = slide.title;
    if (descEl) descEl.textContent = slide.desc;
    if (tagEl) tagEl.textContent = slide.tag;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlide(currentSlideIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlide(currentSlideIndex);
    });
  }
});
