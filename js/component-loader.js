function loadComponents() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    if (file) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          el.innerHTML = await response.text();
          // Inicializar scripts de header, footer o inicio si corresponde
          if (file.includes('header')) {
            const script = document.createElement('script');
            script.src = 'components/principal/header/header.js';
            document.body.appendChild(script);
          }
          if (file.includes('footer')) {
            const script = document.createElement('script');
            script.src = 'components/principal/footer/footer.js';
            document.body.appendChild(script);
          }
          if (file.includes('inicio')) {
            const script = document.createElement('script');
            script.src = 'components/cuerpo/inicio/inicio.js';
            document.body.appendChild(script);
          }
        } else {
          console.error(`Error al cargar el componente: ${file}`);
        }
      } catch (err) {
        console.error(`Error en fetch para ${file}:`, err);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', loadComponents);
