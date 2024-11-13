const suggestions = [
    "Manzana",
    "Bananas",
    "Peras",
    "Uvas",
    "Naranjas",
    "Mangos",
    "Fresas",
    "Cerezas",
    "Kiwi",
    "Sandías"
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

