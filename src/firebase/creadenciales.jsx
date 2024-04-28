import { initializeApp } from "firebase/app";

//Credenciales
const firebaseConfig={
    apiKey: "AIzaSyCiCNrCOorPdwsS499dNUzZNevJyE-P44M",
    authDomain: "seguimientoacademico-9c5ae.firebaseapp.com",
    projectId: "seguimientoacademico-9c5ae",
    storageBucket: "seguimientoacademico-9c5ae.appspot.com",
    messagingSenderId: "1049159685760",
    appId: "1:1049159685760:web:ffed5c79fc42b7d5e7f865",
    measurementId: "G-S6KLVKF3MT"
};
//inicializacion de la constante
const firebaseApp=initializeApp(firebaseConfig);
//exportar firebaseApp a el proyecto
export default firebaseApp;

