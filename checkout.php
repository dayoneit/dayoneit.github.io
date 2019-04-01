<?php
require('square-connect-php-sdk/autoload.php');
require('vendor/autoload.php');

  // dotenv is used to read from the '.env' file created
  $dotenv = Dotenv\Dotenv::create(__DIR__);
  $dotenv->load();

  //set acces token and locaion id
  $accessToken = $_ENV["PROD_ACCESS_TOKEN"];
  $locationId = $_ENV["PROD_LOCATION_ID"];

  //set price per credit and total credits from front-end
  $total_credits = $_POST["credits"];

  //switch prices according to $total_credits
  switch ($total_credits) {
    case 3:
        $price_per_credit = 5400;
    case 6:
        $price_per_credit = 4800;
        break;
    case 10:
        $price_per_credit = 4500;
        break;
    default:
        $price_per_credit = 99900;
        break;
}

  if ( $price_per_credit != 99900 ){
    // Create and configure a new API client object
    $defaultApiConfig = new \SquareConnect\Configuration();
    $defaultApiConfig->setAccessToken($accessToken);
    $defaultApiClient = new \SquareConnect\ApiClient($defaultApiConfig);
    $checkoutClient = new SquareConnect\Api\CheckoutApi($defaultApiClient);



    //Create a Money object to represent the price of the line item.
    $price = new \SquareConnect\Model\Money;
    $price->setAmount($price_per_credit);
    $price->setCurrency('USD');

    //Create the line item and set details
    $credit = new \SquareConnect\Model\CreateOrderRequestLineItem;
    $credit->setName('Visit-Credits');
    $credit->setQuantity($total_credits);
    $credit->setBasePriceMoney($price);



    //Puts our line item object in an array called lineItems.
    $lineItems = array();
    array_push($lineItems, $credit);

    // Create an Order object using line items from above
    $order = new \SquareConnect\Model\CreateOrderRequest();

    $order->setIdempotencyKey(uniqid()); //uniqid() generates a random string.

    //sets the lineItems array in the order object
    $order->setLineItems($lineItems);

    $checkout = new \SquareConnect\Model\CreateCheckoutRequest();

    $checkout->setIdempotencyKey(uniqid()); //uniqid() generates a random string.
    $checkout->setOrder($order); //this is the order we created in the previous step
    $checkout->setAskForShippingAddress(true);
    try {
          $result = $checkoutClient->createCheckout(
            $locationId,
            $checkout
          );
          //Save the checkout ID for verifying transactions
          $checkoutId = $result->getCheckout()->getId();
          //Get the checkout URL that opens the checkout page.
          $checkoutUrl = $result->getCheckout()->getCheckoutPageUrl();
          header("Location: " . $checkoutUrl );
          die();
      } catch (Exception $e) {
          echo 'Exception when calling CheckoutApi->createCheckout: ', $e->getMessage(), PHP_EOL;
      }

  }
  else{
      //send user to 404 page if $price_per_credit is invalid
      header('HTTP/1.1 404 Not Found');
      die();
  }








 ?>
