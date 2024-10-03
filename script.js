document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating label');
    const btn = document.querySelector("button[type='submit']");

    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });

    btn.addEventListener('click', handleSubmit);

    function handleStarClick() {
        const ratingValue = this.previousElementSibling.value;
        console.log(`Calificación seleccionada: ${ratingValue} estrellas`);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Redirigir a la página end.html
        window.location.href = 'end.html';
    }
});
