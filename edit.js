const form = document.querySelector('form');
const api = 'http://localhost:8080/edit'


form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const pass =  formData.get('password');



  const data = {
    email,
    pass
  };

  localStorage.setItem('email', data.email);

  fetch(api, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => {
          console.log(data);
          localStorage.setItem('jwt', data.token );


          window.location.href = "admin";

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
            document.getElementById('email').value = data.email;
            document.getElementById('fName').value = data.fName;
            document.getElementById('lName').value = data.lName;
            document.getElementById('phone').value = data.phone || " ";
            document.getElementById('address').value = data.address || " ";
            document.getElementById('city').value = data.city || " ";
            document.getElementById('zip').value = data.zip || " ";
      });
}
