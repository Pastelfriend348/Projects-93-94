
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDcG72_eo_ykEEqYx60H0-0dxLR0K_bLg",
      authDomain: "kwitter-9cf53.firebaseapp.com",
      databaseURL: "https://kwitter-9cf53-default-rtdb.firebaseio.com",
      projectId: "kwitter-9cf53",
      storageBucket: "kwitter-9cf53.appspot.com",
      messagingSenderId: "747030827232",
      appId: "1:747030827232:web:de852871c7053788968085",
      measurementId: "G-RWVL7SP3V9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData(); 
