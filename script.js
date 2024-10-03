// script.js
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating label');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.previousElementSibling.value;
            console.log(`Calificación seleccionada: ${ratingValue} estrellas`);
        });
    });

    // Modal functionality
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("myModal");
    const btn = document.querySelector("button[type='submit']");
    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        modalContainer.style.display = "block";
    });

    span.onclick = function() {
        modalContainer.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
});
