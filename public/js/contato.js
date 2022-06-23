import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
 
const firebaseConfig = {
     apiKey: "AIzaSyDqeLUxaftDqXzluePogym6CmN0plSl4Rs",
     authDomain: "dashboardlua.firebaseapp.com",
     databaseURL: "https://dashboardlua-default-rtdb.firebaseio.com",
     projectId: "dashboardlua",
     storageBucket: "dashboardlua.appspot.com",
     messagingSenderId: "396224998667",
     appId: "1:396224998667:web:89fe53bef1e53aaeeec60e"
   };
 
 const app = initializeApp(firebaseConfig)
 const db = getFirestore(app);

    let varEmail=document.getElementById("email");
    let varNome=document.getElementById("nome");
    let varMensagem=document.getElementById("mensagem");
    let gravar=document.getElementById("btGravar");

    /*botao gravar*/
    gravar.addEventListener('click',inserirDados);

async function inserirDados(){
     try {
          const docRef = await addDoc(collection(db, "Mensagens"), {
               email:varEmail.value, 
               nome: varNome.value,
               mensagem: varMensagem.value 
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        
}



