// Importa Firebase desde el CDN o desde un módulo de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Configuración de Firebase
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

// Obtén la base de datos
const database = getDatabase(app);