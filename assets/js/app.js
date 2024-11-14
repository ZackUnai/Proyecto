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



// Función para incrementar la cantidad
function increaseQuantity(button) {
    let quantityInput = button.parentElement.querySelector(".quantity");
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
}

// Función para disminuir la cantidad
function decreaseQuantity(button) {
    let quantityInput = button.parentElement.querySelector(".quantity");
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
}

// Inicialización del contador de productos en el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Muestra el contador del carrito al cargar la página
});

// Función para añadir productos al carrito
// Función para añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let quantityInput = button.parentElement.querySelector(".quantity");
        let quantity = parseInt(quantityInput.value);
        let productName = button.parentElement.querySelector("p").textContent; // Obtenemos el nombre del producto
        let productPrice = button.parentElement.querySelector(".product-price").textContent; // Obtenemos el precio
        let productImage = button.parentElement.querySelector("img").src; // Obtenemos la imagen del producto

        // Crear objeto del producto
        let product = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            image: productImage // Agregar la imagen al objeto
        };

        // Obtener carrito actual desde localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verificar si el producto ya está en el carrito
        let existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            // Si el producto ya existe, actualizamos la cantidad
            existingProduct.quantity += quantity;
        } else {
            // Si el producto no existe, lo agregamos al carrito
            cart.push(product);
        }

        // Guardar el carrito actualizado
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar el contador del carrito
        let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); // Sumar todas las cantidades
        localStorage.setItem('cartCount', cartCount);

        updateCartCount(); // Actualizar el contador visualmente
    });
});


// Función para actualizar el contador del carrito
function updateCartCount() {
    let cartCount = getCartCount();
    document.getElementById('cart-count').textContent = cartCount;
}

// Función para obtener el contador del carrito desde localStorage
function getCartCount() {
    let cartCount = localStorage.getItem('cartCount',0);
    return cartCount ? parseInt(cartCount) : 0;
}

// Función para reiniciar el carrito
function resetCart() {
    // Eliminar el carrito y el contador del carrito de localStorage
    localStorage.removeItem('cart');
    localStorage.removeItem('cartCount');

    // Actualizar el contador visualmente a 0
    updateCartCount();
}
// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Recuperar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Obtener el contador del carrito
    let cartCount = document.getElementById("cart-count");

    // Actualizar el contador del carrito en la barra de navegación
    if (cartCount) {
        cartCount.textContent = cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
    }
});
