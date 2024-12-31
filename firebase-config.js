// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Configuración de Firebase (rellena con tus datos)
const firebaseConfig = {
  apiKey: "AIzaSyB2J3X2lIxa55BQv5z0D8RcyrbIU40IFRs",
  authDomain: "clicksap.firebaseapp.com",
  databaseURL: "https://clicksap-default-rtdb.firebaseio.com",
  projectId: "clicksap",
  storageBucket: "clicksap.firebasestorage.app",
  messagingSenderId: "842841718008",
  appId: "1:842841718008:web:3bb7f097558e07b760cf0d",
  measurementId: "G-38NKLTXM5C"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referencia al ranking mundial
const leaderboardRef = ref(database, 'leaderboard');

// Función para guardar la puntuación en el ranking
const saveScore = (name, score) => {
    const playerRef = ref(database, `leaderboard/${name}`);
    set(playerRef, { name, score });
};