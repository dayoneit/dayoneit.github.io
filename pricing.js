function square() {
  var api = "http://localhost:8080/square";



  fetch(api, {
        method: "GET",

  }).then(response => response.json())
    .then(data => {
          console.log(data.checkout.checkout_page_url);
          window.location.href = data.checkout.checkout_page_url;
    });


}
