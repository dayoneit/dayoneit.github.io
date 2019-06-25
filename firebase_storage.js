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

    function postFormToFireBase() {

      const db = firebase.firestore();


      let formSelect  = document.querySelector("form");

      let formData = new FormData(formSelect);

      const _A_fName = formData.get('fName');
      const _B_lName = formData.get('lName');
      const _C_email = formData.get('email');
      const _D_dob   = formData.get('dob');
      const _E_zip   = formData.get('zip');
      const _F_car   = formData.get('car');
      const _G_city  = formData.get('city');

      const _H_schoolAttendance = formData.get('schoolAttending');
      const _I_schoolName = formData.get('schoolName');
      const _J_prevWork   = formData.get('prevWork');
      const _K_grandma    = formData.get('grandmaQues');
      const _L_techRecc   = formData.get('techRecc');
      const _M_helpTeam   = formData.get('helpTeam');
      const _N_difficult  = formData.get('difficult');
      const _O_amusing    = formData.get('amusing');
      const _P_youtube    = formData.get('youtube');
      const _Q_whyApply   = formData.get('whyApply');
      const _R_addInfo    = formData.get('addInfo');
      const _S_hear       = formData.get('hear');
      const _T_acknwldge  = formData.get('acknowledge');

      const data = {
        _A_fName,
        _B_lName,
        _C_email,
        _D_dob,
        _E_zip,
        _F_car,
        _G_city,
        _H_schoolAttendance,
        _I_schoolName,
        _J_prevWork,
        _K_grandma,
        _L_techRecc,
        _M_helpTeam,
        _N_difficult,
        _O_amusing,
        _P_youtube,
        _Q_whyApply,
        _R_addInfo,
        _S_hear,
        _T_acknwldge
      };

      db.collection("Applications").doc(_A_fName + " " + _B_lName).set(data)
      .then(function() {
          console.log("Document successfully written!");
          window.location.href = 'appconfirmation.html';

      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });


    }

    function uploadFile(files){

      // Create a storage ref
      const storageRef = firebase.storage().ref('Resumes');

      const fileRef = storageRef.child(files[0].name);

      const file = files.item(0);
      const task = fileRef.put(file);

      // Display file name
      document.querySelector('.fileName').innerHTML = files[0].name;

  }
