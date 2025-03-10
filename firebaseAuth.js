
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, sighInWithUserNameAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"
  import{getFirestore, setDoc, doc}from"https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


function logIn(){
  const email=document.getElementById('txtEmail').value;
  const password=document.getElementById('txtPass').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

/*
const sighUp=document.getElementById('btnRegister');
sighUp.addEventListener('click',(event)=>{
  event.preventDefault();
  const email=document.getElementById('txtEmail').value;
  const password=document.getElementById('txtPass').value;
  const conPass=document.getElementById('txtConPass').value;
const userName=document.getElementById('txtUserName').value;

const auth=getAuth();
const db=getFirestore();

createUserWithEmailAndPassword(auth, email,password)
.then((userCredential)=>{
  const user=userCredential.user;
  const userData={
    email:email,
    userName:userName,

  };
  showMessage('Account create successfully');
  const docRef=doc(db, "users", user.uid);
  setDoc(docRef,userData)
  .then(()=>{
    window.location.href='dashBoard.html';
  })
  .catch((error)=>{
console.error("error writting documnet",error)
  });
})
.catch((error)=>{
  const errorcode=error.code;
  if(errorCode=='auth/email-already-in-use'){
    showMessage('Email address Already Exists');
  }
  else{
    showMessage('unable to create user');
  }
})
}); 

*/