function fillFields() {
  const api = 'http://localhost:8080/edit';
  let user = localStorage.getItem('email');
  let body = {
    user: user,
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
    }).then(respose => response.json())
      .then(data => {
            document.getElementById('email').value = "hello";
            document.getElementById('email').value = "hello";
            document.getElementById('email').value = "hello";
            document.getElementById('email').value = "hello";
            document.getElementById('email').value = "hello";
            document.getElementById('email').value = "hello";
      });
}
