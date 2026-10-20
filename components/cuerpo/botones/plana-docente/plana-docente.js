/**
 * Plana Docente Component - JavaScript
 * Maneja el filtrado por programas, la búsqueda en tiempo real y el conteo de docentes.
 */
function initPlanaDocente() {
  const tabs = document.querySelectorAll('.plana-docente-wrapper .docente-tab-btn');
  const blocks = document.querySelectorAll('.plana-docente-wrapper .docente-program-block');
  const searchInput = document.getElementById('docenteSearchInput');
  const countBadge = document.getElementById('docenteTotalCount');
  const noResults = document.getElementById('docenteNoResults');

  if (!blocks.length) return;

  let activeFilter = 'all';

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleTeachersCount = 0;
    let visibleBlocksCount = 0;

    blocks.forEach(block => {
      const progType = block.getAttribute('data-program');
      const matchesFilter = (activeFilter === 'all' || progType === activeFilter);

      if (!matchesFilter) {
        block.style.display = 'none';
        return;
      }

      // Filtrar filas internas si hay búsqueda
      const rows = block.querySelectorAll('.docente-row');
      let blockVisibleRows = 0;

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          row.style.display = '';
          blockVisibleRows++;
          visibleTeachersCount++;
        } else {
          row.style.display = 'none';
        }
      });

      if (blockVisibleRows > 0) {
        block.style.display = '';
        visibleBlocksCount++;
      } else {
        block.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = visibleTeachersCount;
    }

    if (noResults) {
      noResults.style.display = (visibleBlocksCount === 0) ? 'block' : 'none';
    }
  }

  // Eventos para Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Evento para Buscador en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Inicializar estado
  applyFilters();
}

document.addEventListener('DOMContentLoaded', initPlanaDocente);
window.initPlanaDocenteView = initPlanaDocente;
