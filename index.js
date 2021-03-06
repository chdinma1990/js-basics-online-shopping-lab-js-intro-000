var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   const price = Math.floor(Math.random() * 100);
   cart.push({ [item]: price});

   console.log(`${item} has been added to your cart.`)

   return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {

    var itemsAndPrices = [];

    for (var i in cart){
      var itemAndPrice = cart[i];
      for (var key in itemAndPrice){
        itemsAndPrices.push(key + " at $" + itemAndPrice[key])
      }
    }
    var cartItems = itemsAndPrices.join(", ");
    console.log("In your cart, you have " + cartItems + ".")
  }
}

function removeFromCart(item) {

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
    }
    return console.log("That item is not in your cart.");
  }


function placeOrder(cardNumber) {
   if (!cardNumber) {
     return console.log("Sorry, we don\'t have a credit card on file for you.")
   }

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

   cart = []
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
