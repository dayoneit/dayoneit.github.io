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
