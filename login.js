console.log("hello user!");

const form = document.querySelector('form');
const api = 'http://localhost:8080/login'

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


          if ( data.isAuthentic ){
            localStorage.setItem('jwt', data.token );
            window.location.href = "admin";
          } else {

            document.getElementById("error-msg").innerHTML = data.message;
            console.log(data);

          }


    });



});
