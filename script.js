// Asegúrate de que Firebase ya esté configurado en firebase-config.js
// Si es necesario, importa las funciones de Firebase en este archivo:

document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.getElementById("click-button");
    const clickCount = document.getElementById("click-count");
    const leaderboardList = document.getElementById("leaderboard");

    let count = 0;

    // Incrementa el contador de clics
    clickButton.addEventListener("click", () => {
        count++;
        clickCount.textContent = count;  // Muestra los clics en el panel
        saveScore("Jugador Anónimo", count); // Guarda en el ranking, puedes personalizar el nombre
    });

    // Firebase: Cargar y mostrar el ranking
    const loadLeaderboard = () => {
        // Se obtiene la referencia a la base de datos
        const leaderboardRef = ref(database, 'leaderboard');  // Definir la referencia de la base de datos
        onValue(leaderboardRef, (snapshot) => {
            leaderboardList.innerHTML = ''; // Limpia la lista actual antes de cargar los nuevos datos
            const data = snapshot.val(); // Datos de la base de datos

            if (data) {
                // Convierte los datos de Firebase en un array y los ordena por puntuación
                const sortedPlayers = Object.values(data)
                    .sort((a, b) => b.score - a.score);  // Ordena por puntuación descendente

                // Muestra el ranking en la interfaz
                sortedPlayers.forEach((player, index) => {
                    const li = document.createElement("li");
                    li.textContent = `#${index + 1} ${player.name}: ${player.score}`;
                    leaderboardList.appendChild(li);
                });
            }
        });
    };

    // Cargar el ranking cuando la página se cargue
    loadLeaderboard();
});

// Función para guardar el puntaje en Firebase
const saveScore = (name, score) => {
    const playerRef = ref(database, `leaderboard/${name}`);
    set(playerRef, { name, score });  // Guarda los datos del jugador en la base de datos
};
