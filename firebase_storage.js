// Firebase configuration
    var firebaseConfig = {
     apiKey: "AIzaSyCnj7LrQ_NkwBjL791FVIuk2FSmCOgYLa8",
     authDomain: "orchardinfofileupload.firebaseapp.com",
     databaseURL: "https://orchardinfofileupload.firebaseio.com",
     projectId: "orchardinfofileupload",
     storageBucket: "orchardinfofileupload.appspot.com",
     messagingSenderId: "267444946218",
     appId: "1:267444946218:web:76e719aa9c4def81"
   };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function uploadFile(files){

      // Create a storage ref
      const storageRef = firebase.storage().ref('Resumes');

      const fileRef = storageRef.child(files[0].name);

      const file = files.item(0);
      const task = fileRef.put(file);

      // Display file name
      document.querySelector('.fileName').innerHTML = files[0].name;

  }
