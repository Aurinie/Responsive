// Array con frases para el carrousel
const carouselLines = [
    "Vestibulum mollis, tortor ac congue commodo.",
    "Phasellus eleifend semper tempor.",
    "Fusce vitae enim et tellus lacinia condimentum."
];

// Función para cambiar el texto cada 2 segundos
let currentIndex = 0;
const carouselElement = document.getElementById("carouselText");

function updateCarouselText() {
    carouselElement.textContent = carouselLines[currentIndex];
    currentIndex = (currentIndex + 1) % carouselLines.length;
}

// Iniciar el carrousel al cargar la página
window.onload = function () {
    updateCarouselText();
    setInterval(updateCarouselText, 2000); // Cambia cada 2 segundos
};
