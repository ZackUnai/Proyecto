const suggestions = [
    "Nike Stride",
    "Nike Dri-FIT Legend",
    "Nike Form",
    "Nike Totality",
    "Nike Pro Camo",
    "Nike",
    "Camiseta Visitante Selección Argentina 1994",
    "Camiseta Visitante Selección Colombia 24",
    "Camiseta Local Alemania 24",
    "Sandías",
    "Fresas",
    "Cerezas",
    "Kiwi",
    "Fresas",
    "Cerezas",
    "Kiwi",
    "Fresas",
    "Cerezas",
    "Kiwi",
    "Fresas",
    "Cerezas",
    "Kiwi"
];

function showSuggestions() {
    const input = document.getElementById('search');
    const suggestionsBox = document.getElementById('suggestions-box');
    const query = input.value.toLowerCase();

    // Filtra las sugerencias que coincidan con la búsqueda
    const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

    // Si hay sugerencias, muéstralas
    if (query !== "" && filteredSuggestions.length > 0) {
        suggestionsBox.innerHTML = filteredSuggestions.map(item => `<div>${item}</div>`).join('');
        suggestionsBox.style.display = "block";
    } else {
        suggestionsBox.style.display = "none";
    }

    // Añadir evento para seleccionar una sugerencia
    const suggestionItems = suggestionsBox.getElementsByTagName('div');
    for (let i = 0; i < suggestionItems.length; i++) {
        suggestionItems[i].addEventListener('click', () => {
            input.value = suggestionItems[i].textContent;
            suggestionsBox.style.display = "none";
        });
    }
}

// Cierra el cuadro de sugerencias si se hace clic fuera del buscador
document.addEventListener('click', (event) => {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('suggestions-box').style.display = "none";
    }
});
<!-- es -->
<!-- confuso -->
<!-- ¿verdad? -->
<!-- sin -->
<!-- embargo -->
<!-- sabes -->
<!-- perfectamente -->
<!-- cuando -->
<!-- estás -->
<!-- mal, -->
<!-- todo -->
<!-- tu -->
<!-- cuerpo -->
<!-- física -->
<!-- y -->
<!-- mentalmente -->
<!-- te -->
<!-- lo -->
<!-- hace -->
<!-- saber, -->
<!-- te -->
<!-- notas -->
<!-- flojo -->
<!-- con -->
<!-- pensamientos -->
<!-- fatalistas -->
<!-- esa -->
<!-- sensación -->
<!-- que -->
<!-- todo -->
<!-- está -->
<!-- perdido, -->
<!-- qué -->
<!-- ya -->
<!-- nada -->
<!-- será -->
<!-- como -->
<!-- antes, -->
<!-- te -->
<!-- torturas -->
<!-- recordando -->
<!-- una -->
<!-- vivencia -->
<!-- pasada -->
<!-- aleatoria -->
<!-- en -->
<!-- aquel -->
<!-- momento -->
<!-- ni -->
<!-- siquiera -->
<!-- parecía -->
<!-- un -->
<!-- buen -->
<!-- momento -->
<!-- pero -->
<!-- comparado -->
<!-- como -->
<!-- te -->
<!-- sientes -->
<!-- ahora -->
<!-- podría -->
<!-- incluso -->
<!-- decirse -->
<!-- que... -->
<!-- Fuiste -->
<!-- feliz -->
<!-- sin -->
<!-- saberlo -->

