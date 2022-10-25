//Importamos las funciones AUTH - Cambiamos la ruta del firebase de cada una
import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  
} from "./utils.js";

const firebaseConfig = {   //en esta llave se va a alojar nuestra data de publicaciones - fst 
  apiKey: "AIzaSyAjKkyDbHluBqhq8ZVzEkc1vb231KCN8os",
  authDomain: "migrored-9fcb3.firebaseapp.com",
  projectId: "migrored-9fcb3",
  storageBucket: "migrored-9fcb3.appspot.com",
  messagingSenderId: "947566190597",
  appId: "1:947566190597:web:a0d69f203b5840fa2b7c6c"
};

//Inicializamos Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Declaramos a Google como proveedor
export const provider = new GoogleAuthProvider(); //funcion constructora
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password); //creando un usuario
export const popupGoogle = () => signInWithPopup(auth, provider);
export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password); //logueando un usuario



 
  