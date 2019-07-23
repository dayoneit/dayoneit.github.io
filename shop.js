function addCart(credits) {
    event.preventDefault();
    const api = 'http://localhost:8080/shop'
    const num = credits;

    const data = {
      num
    };



    fetch(api, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {

      });
}
