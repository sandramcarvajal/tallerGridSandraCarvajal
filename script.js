document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[name="filtro-precio"]');
  const cards = document.querySelectorAll('.card');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      filtrarPorPrecio();
    });
  });

  function filtrarPorPrecio() {
    const filtrosActivos = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => ({
        min: parseInt(checkbox.dataset.min),
        max: parseInt(checkbox.dataset.max)
      }));

    cards.forEach(card => {
      const precio = parseInt(card.dataset.precio);

      // Si no hay filtros seleccionados, muestra todo
      if (filtrosActivos.length === 0) {
        card.style.display = '';
        return;
      }

      // Mostrar solo si cae dentro de al menos uno de los rangos
      const mostrar = filtrosActivos.some(filtro => precio >= filtro.min && precio <= filtro.max);
      card.style.display = mostrar ? '' : 'none';
    });
  }
});

// Redirigir a formulario al hacer clic en "Comprar"
const botonesComprar = document.querySelectorAll(".card button");

botonesComprar.forEach(boton => {
  boton.addEventListener("click", () => {
    window.location.href = "formulario.html";
  });
});
