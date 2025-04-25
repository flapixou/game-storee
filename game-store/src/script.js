// Fonction de recherche
function searchGames() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        const titleElement = game.querySelector('h3');
        const gameName = titleElement ? titleElement.textContent.toLowerCase() : '';

        game.style.display = gameName.includes(searchQuery) ? 'block' : 'none';
    });
}

// Fonction de scroll vers le bas
function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Lier les événements (si ce n'est pas déjà fait dans le HTML)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    if (searchInput) {
        searchInput.addEventListener('input', searchGames);
    }

    const scrollBtn = document.getElementById('scrollDownBtn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', scrollDown);
    }
});
function exampleFunction() {
    alert("JavaScript fonctionne !");
}

// Ton code JavaScript ici
