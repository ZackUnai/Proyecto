const suggestions = [
    "Nike Stride", "Nike Dri-FIT Legend", "Nike Form", "Nike Totality", "Nike Pro Camo", "Nike Camisa",
    "Camiseta Visitante Selección Argentina 1994", "Camiseta Visitante Selección Colombia 24", "Camiseta Local Alemania 24", 
    "Camiseta Local España 24", "Camiseta Local Bélgica 24", "Camiseta Local Italia 2024 Versión Jugador", 
    "Nike AeroSwift", "Nike Pro Indy Plunge", "Nike Zenvy", "Nike Swoosh Medium Support", "Nike Trail", 
    "Camiseta Adizero Running", "Nike Sportswear Breaking Windrunner", "Nike One Classic", "Nike Fast", 
    "Camiseta Adicolor 3 Rayas Pinstripe", "Camiseta Own the Run 3 Rayas", "Camiseta Corta Tennis Pro AEROREADY", 
    "Nike Invincible 3", "Nike Air Max 270", "Nike Air Max Sc", "Nike Free Metcon 6", "Tenis de Running Supernova Rise", 
    "Nike Winflo 11", "Tenis Supernova Stride M", "FresaNike Structure 25", "Nike Revolution 7", "Nike Invincible 3", 
    "Tenis de Senderismo Terrex Anylander", "Tenis de Senderismo Terrex Anylander Corte Medio", "Nike Storm-FIT ADV Club", 
    "Jordan", "Nike Pitch", "Nike Dri-FIT ADV Club", "Nike Goalkeeper Match", "Nike Dri-FIT Club", "Nike Charge", 
    "Nike Bolso", "Nike Brasilia 9.5", "Nike Sportswear Everyday Essential", "Nike Multiplier", "Nike Everyday Cushioned"
];

// Redireccionar según el texto de la sugerencia
function getRedirectLink(itemText) {
    if (suggestions.indexOf(itemText) < 12) {
        return 'https://zackunai.github.io/Proyecto/Productos_Hombre.html'; // Hombres
    } else if (suggestions.indexOf(itemText) < 24) {
        return 'https://zackunai.github.io/Proyecto/Productos_Mujeres.html'; // Mujeres
    } else if (suggestions.indexOf(itemText) < 36) {
        return 'https://zackunai.github.io/Proyecto/Productos_Calzados.html'; // Calzado
    } else {
        return 'https://zackunai.github.io/Proyecto/Productos_Accesorios.html'; // Accesorios
    }
}

// Muestra las sugerencias basadas en la búsqueda
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
        suggestionsBox.innerHTML = limitedSuggestions.map((item) => {
            const redirectLink = getRedirectLink(item); // Obtener la URL de redirección
            return `<div><a href="${redirectLink}" class="suggestion-link">${item}</a></div>`;
        }).join('');
        suggestionsBox.style.display = "block";
    } else {
        suggestionsBox.style.display = "none";
    }

    // Añadir eventos de clic para redirigir a la URL correspondiente
    const suggestionItems = suggestionsBox.getElementsByClassName('suggestion-link');
    for (let i = 0; i < suggestionItems.length; i++) {
        suggestionItems[i].addEventListener('click', (event) => {
            // Prevenir el comportamiento predeterminado (seguir el enlace)
            event.preventDefault();
            // Redirigir manualmente usando la URL obtenida
            window.location.href = suggestionItems[i].href;
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
// Función para iniciar sesión y guardar el username en sessionStorage
function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí podrías hacer la validación de la contraseña si lo deseas
    if (username && password) {
        sessionStorage.setItem("username", username); // Guarda el username en sessionStorage
        window.location.href = "index.html"; // Redirige a la página principal
    }
    return false; // Previene el envío del formulario
}

// Función para mostrar el username en cualquier página
function mostrarUsuario() {
    const username = sessionStorage.getItem("username");
    const usuarioLink = document.getElementById("usuario-link");

    if (username && usuarioLink) {
        usuarioLink.textContent = `USUARIO: ${username}`; // Establece el texto del enlace
    } else {
        usuarioLink.textContent = "USUARIO"; // Texto por defecto si no hay usuario
    }
}

// Ejecuta mostrarUsuario cuando se carga cada página
document.addEventListener("DOMContentLoaded", mostrarUsuario);

// Cierre de sesión
document.addEventListener("DOMContentLoaded", () => {
    const usuarioLink = document.getElementById("usuario-link");
    const menuUsuario = document.getElementById("menu-usuario");

    // Evento para el enlace de usuario
    usuarioLink.addEventListener("click", (e) => {
        e.preventDefault(); // Previene la redirección del enlace

        // Si no hay usuario, redirige a iniciar sesión
        if (!sessionStorage.getItem("username")) {
            window.location.href = "usuario.html"; // Redirige a la página de inicio de sesión
        } else {
            // Alterna el menú desplegable si ya hay un usuario logueado
            if (menuUsuario.style.display === "none" || menuUsuario.style.display === "") {
                menuUsuario.style.display = "block"; // Muestra el submenú
            } else {
                menuUsuario.style.display = "none"; // Oculta el submenú
            }
        }
    });

    // Oculta el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (!usuarioLink.contains(e.target) && !menuUsuario.contains(e.target)) {
            menuUsuario.style.display = "none"; // Oculta el submenú
        }
    });

    // Cierra sesión al hacer clic en "Cerrar sesión"
    document.getElementById("cerrar-sesion").addEventListener("click", (e) => {
        e.preventDefault(); // Previene cualquier acción de enlace
        sessionStorage.removeItem("username"); // Elimina el nombre de usuario del sessionStorage
        usuarioLink.textContent = "USUARIO"; // Vuelve a mostrar "Usuario"
        menuUsuario.style.display = "none"; // Oculta el menú desplegable
        window.location.href = "index.html"; // Redirige a la página de inicio
    });
});
// Generar un número aleatorio entre 1 y 1000
const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

// Mostrar el número aleatorio en el HTML
document.getElementById('contador').innerText = numeroAleatorio;
