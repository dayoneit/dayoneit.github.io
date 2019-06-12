console.log("hello user!");

const form = document.querySelector('form');
const api = 'http://localhost:8080/signup'

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const formData = new FormData(form);
  const user = formData.get('user');
  const email =  formData.get('email');
  const fName =  formData.get('fName');
  const lName =  formData.get('lName');
  const pass =  formData.get('password');

  const data = {
    user,
    email,
    fName,
    lName,
    pass
  };

  fetch(api, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json'
    }
  });



});
