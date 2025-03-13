// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWjsXOwIiNtdUrtupTJj80TgsGHP4zH1Y",
    authDomain: "first-project-cff24.firebaseapp.com",
    projectId: "first-project-cff24",
    storageBucket: "first-project-cff24.firebasestorage.app",
    messagingSenderId: "693424858250",
    appId: "1:693424858250:web:6e50a1e1cae430c5cfb973",
    measurementId: "G-HHPVTQGB76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase authentication

// Wait until the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form from refreshing the page
            logIn();
        });
    }
});


function logIn() {
    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPass").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login successful! Welcome, " + user.email);
            console.log("User logged in:", user);
            window.location.href = "guideDashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
            console.error("Login error:", error);
        });
}
