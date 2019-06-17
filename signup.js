console.log("hello user!");

const form = document.querySelector('form');
const api = 'http://localhost:8080/signup'

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const formData = new FormData(form);
  const email =  formData.get('email');
  const fName =  formData.get('fName');
  const lName =  formData.get('lName');
  const pass =  formData.get('password');
  const signUpForm = document.getElementById("sign");
  const completionForm = document.getElementById("complete");
  const errorMsg = document.getElementById("error-msg");



  const data = {
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
  }).then(response => response.json())
    .then(result => {
        console.log(result);

        if(result.isValidated){

          signUpForm.style.display = "none";
          completionForm.style.display = "block";

        } else{
          errorMsg.innerHTML = result.message;
        }
    });



});
