const suggestions = [
    "Nike Stride",
    "Nike Dri-FIT Legend",
    "Nike Form",
    "Nike Totality",
    "Nike Pro Camo",
    "Nike Camisa",
    "Camiseta Visitante Selección Argentina 1994",
    "Camiseta Visitante Selección Colombia 24",
    "Camiseta Local Alemania 24",
    "Camiseta Local España 24",
    "Camiseta Local Bélgica 24",
    "Camiseta Local Italia 2024 Versión Jugador",
    "Nike AeroSwift",
    "Nike Pro Indy Plunge",
    "Nike Zenvy",
    "Nike Swoosh Medium Support",
    "Nike Trail",
    "Camiseta Adizero Running",
    "Nike Sportswear Breaking Windrunner",
    "Nike One Classic",
    "Nike Fast",
    "Camiseta Adicolor 3 Rayas Pinstripe",
    "Camiseta Own the Run 3 Rayas",
    "Camiseta Corta Tennis Pro AEROREADY",
    "Nike Invincible 3",
    "Nike Air Max 270",
    "Nike Air Max Sc",
    "Nike Free Metcon 6",
    "Tenis de Running Supernova Rise",
    "Nike Winflo 11",
    "Tenis Supernova Stride M",
    "FresaNike Structure 25",
    "Nike Revolution 7",
    "Nike Invincible 3",
    "Tenis de Senderismo Terrex Anylander",
    "Tenis de Senderismo Terrex Anylander Corte Medio",
    "Nike Storm-FIT ADV Club",
    "Jordan",
    "Nike Pitch",
    "Nike Dri-FIT ADV Club",
    "Nike Goalkeeper Match",
    "Nike Dri-FIT Club",
    "Nike Charge",
    "Nike Bolso",
    "Nike Brasilia 9.5",
    "Nike Sportswear Everyday Essential",
    "Nike Multiplier",
    "Nike Everyday Cushioned"
];

function showSuggestions() {
    const input = document.getElementById('search');
    const suggestionsBox = document.getElementById('suggestions-box');
    const query = input.value.toLowerCase();

    // Filtra las sugerencias que coincidan con la búsqueda
    const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

    // Limita las sugerencias a las primeras 3
    const limitedSuggestions = filteredSuggestions.slice(0, 3);

    // Si hay sugerencias, muéstralas
    if (query !== "" && limitedSuggestions.length > 0) {
        suggestionsBox.innerHTML = limitedSuggestions.map(item => `<div>${item}</div>`).join('');
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

