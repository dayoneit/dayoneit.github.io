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

function redirectToCheckout() {
  var stripe = Stripe('pk_test_1xc0fE9f2HobvpJWiTI2tT4j00RZM8Ghs0');

    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{plan: 'plan_abc123', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'https://orchardinfo.com/pricing',
      cancelUrl: 'https://orchardinfo.com/',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });

}
