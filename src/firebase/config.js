import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const configuracionFirebase = {
    claveAPI: "AIzaSyCeZBZ-zTr99VtKA2TwO9_palB08smtkGw",
    dominioAuth: "tu-dominio-auth-b1234.firebaseapp.com",
    urlBaseDeDatos: "https://console.firebase.google.com/u/0/project/gymprogress-b17f4/settings/general/android:com.company.gymprogress?hl=es-419",
    idProyecto: "gymprogress-b17f4",
    presupuestoAlmacenamiento: "tu-id-proyecto-1234.appspot.com",
    idRemitenteMensajes: "922104682144",
    idApp: "1:922104682144:android:06af29611864ce92245bc5",
};

if (!firebase.apps.length) {
    firebase.initializeApp(configuracionFirebase);
}

export { firebase };
