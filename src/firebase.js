import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQysY8J-jB402HzrbF5BEyFoyZ4WIagns",
  authDomain: "reqriutment-test.firebaseapp.com",
  projectId: "reqriutment-test",
  storageBucket: "reqriutment-test.appspot.com",
  messagingSenderId: "964328267652",
  appId: "1:964328267652:web:6847572d7dbc255a1e47d1"
};

const app = initializeApp(firebaseConfig);

export { app };