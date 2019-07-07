function verifyJwt() {
  console.log("script working");
  const api = 'http://localhost:8080/admin';
  const body = document.getElementsByClassName('admin');
  const profileName = document.getElementsByClassName('profile-name');
  const profileEmail = document.getElementsByClassName('profile-email');
  let   jwt = localStorage.getItem('jwt');
  const bearer = 'Bearer ' + jwt;

  let payload = {
    email: localStorage.getItem('email')
  };



  if(jwt){

  } else {
    window.location.href = 'login';
  }

  fetch(api, {

        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Authorization' : bearer,
          'Content-Type'  : 'application/json'
        }

      }).then(response => response.json())
        .then(data => {
              if (data.isAuthorized){
                console.log("jwt verified");
                console.log(data);
                document.querySelector('body').style.display = 'block';
                document.getElementById('profile-name').innerHTML = data.name;
                document.getElementById('profile-email').innerHTML = data.email;


              } else {
                console.log("not verified");
                window.location.href = 'login';
              }
        });

};
