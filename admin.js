function verifyJwt() {
  console.log("script working");
  const api = 'http://localhost:8080/admin';
  const body = document.getElementsByClassName('admin');
  let   jwt = localStorage.getItem('jwt');
  const bearer = 'Bearer ' + jwt;

  if(jwt){

  } else {
    window.location.href = 'login';
  }

  fetch(api, {
        method: 'POST',
        headers: {
          'Authorization' : bearer,
          'Content-Type'  : 'application/json'
        }

      }).then(response => response.json())
        .then(data => {
              if (data.isAuthorized){
                console.log("jwt verified");
                document.querySelector('body').style.display = 'block';

              } else {
                console.log("not verified");
                window.location.href = 'login';
              }
        });

};
