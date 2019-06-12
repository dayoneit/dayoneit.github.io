console.log("hello user!");

const form = document.querySelector('form');
const api = 'http://localhost:8080/login'

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const formData = new FormData(form);
  const user = formData.get('user');
  const pass =  formData.get('password');

  const data = {
    user,
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
