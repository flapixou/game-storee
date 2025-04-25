// Fonction de recherche des jeux
function searchGames() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        const gameName = game.querySelector('h3').textContent.toLowerCase();
        if (gameName.includes(searchQuery)) {
            game.style.display = 'block'; // Afficher si le jeu correspond à la recherche
        } else {
            game.style.display = 'none'; // Masquer si le jeu ne correspond pas
        }
    });
}

// Fonction pour faire défiler la page vers le bas
function scrollDown() {
    window.scrollBy({
        top: window.innerHeight, // Défilement d'une hauteur d'écran
        behavior: 'smooth' // Défilement fluide
    });
}
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
