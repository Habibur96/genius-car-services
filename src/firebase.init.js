// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByYUTvr0AQn_jvf_T5itK24iHVUfG62fU",
    authDomain: "genius-car-services-f8791.firebaseapp.com",
    projectId: "genius-car-services-f8791",
    storageBucket: "genius-car-services-f8791.appspot.com",
    messagingSenderId: "170873144467",
    appId: "1:170873144467:web:f75d5d0e2d70698b317966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;