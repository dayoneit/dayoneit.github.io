const form = document.querySelector('form');
const api = 'http://localhost:8080/edit'


form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const formData = new FormData(form);
  const fName = formData.get('fName');
  const lName = formData.get('lName');
  const phone = formData.get('phone');
  const addrs = formData.get('address');
  const city  = formData.get('city');
  const zip   = formData.get('zip');
  const update = true;
  let email = localStorage.getItem('email');






  const data = {
    email,
    fName,
    lName,
    phone,
    addrs,
    city,
    zip,
    update

  };


  fetch(api, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => {
          console.log(data);


    });



});


function fillFields() {
  const api = 'http://localhost:8080/edit';
  let user = localStorage.getItem('email');
  let jwt = localStorage.getItem('jwt');
  let body = {
    user: user,
    jwt: jwt
  }

  if(jwt){

  } else {
    window.location.href = 'login';
  }


  fetch(api, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
            document.getElementById('fName').value = data.fName;
            document.getElementById('lName').value = data.lName;
            document.getElementById('phone').value = data.phone || " ";
            document.getElementById('address').value = data.address || " ";
            document.getElementById('city').value = data.city || " ";
            document.getElementById('zip').value = data.zip || " ";
      });
}

function uploadFile(files){
  var firebaseConfig = {
    apiKey: "AIzaSyBSO7MfiM66-jrb59O3hDi_dq8nlCPc_ws",
    authDomain: "firebasics-8470d.firebaseapp.com",
    databaseURL: "https://firebasics-8470d.firebaseio.com",
    projectId: "firebasics-8470d",
    storageBucket: "firebasics-8470d.appspot.com",
    messagingSenderId: "369340214069",
    appId: "1:369340214069:web:757540d02ca1e048"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Create a storage ref
  const storageRef = firebase.storage().ref('Profile_Pictures');

  const fileRef = storageRef.child(files[0].name);

  const file = files.item(0);
  const task = fileRef.put(file);

  // Display file name
  document.querySelector('.fileName').innerHTML = files[0].name;

}
