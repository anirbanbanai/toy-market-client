// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtKmU4-OyCnpIkOWkl-7FsV5_G1Tg2Vc",
  authDomain: "my-toy-project-df20e.firebaseapp.com",
  projectId: "my-toy-project-df20e",
  storageBucket: "my-toy-project-df20e.appspot.com",
  messagingSenderId: "220438026783",
  appId: "1:220438026783:web:5c2d1058ccdb761816132a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};