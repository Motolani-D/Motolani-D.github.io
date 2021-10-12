var cartItemOne = document.getElementById("cartItemOne");
var cartItemTwo = document.getElementById("cartItemTwo");
var cartItemThree = document.getElementById("cartItemThree");

var totalAmount = document.getElementById("totalAmount");

var deleteItemOne = document.getElementById("deleteItemOne");
//create eventlistener for delete itemone
deleteItemOne.addEventListener("click", function () {
  // Asking to deleted the entire item from cart on click
  //totalAmount.style.color = "red";
  let computedTotal = computeTotal(1);
  console.log("computedTotal", computedTotal);
  totalAmount.innerText = computedTotal;
  cartItemOne.style.display = "none";
});
var deleteItemTwo = document.getElementById("deleteItemTwo");
//create eventlistener for delete itemone
deleteItemTwo.addEventListener("click", function () {
  // Asking to deleted the entire item from cart on click
  let computedTotal = computeTotal(2);
  console.log("computedTotal", computedTotal);

  totalAmount.innerText = computedTotal;
  cartItemTwo.style.display = "none";
});
var deleteItemThree = document.getElementById("deleteItemThree");
//create eventlistener for delete itemone
deleteItemThree.addEventListener("click", function () {
  // Asking to deleted the entire item from cart on click
  let computedTotal = computeTotal(3);
  console.log("computedTotal", computedTotal);
  totalAmount.innerText = computedTotal;
  cartItemThree.style.display = "none";

});

var totalAmount = document.getElementById("totalAmount");
var totalAmount = document.getElementById("totalAmount");

function incrementValue(e) {
  let elementId = e.target.getAttribute("data-counter");
  let inputElement = document.getElementById(elementId);

  var parsedValue = parseInt(inputElement.value, 10);
  parsedValue = isNaN(parsedValue) ? 0 : parsedValue;
  if (parsedValue < 10) {
    parsedValue++;
    inputElement.value = parsedValue;
  }

  //let priceFieldId = e.target.getAttribute("data-pricing");
  //let priceField = document.getElementById(priceFieldId);

  let computedTotal = computeTotal();
  totalAmount.innerText = computedTotal;
}

function computeTotal(index) {
  console.log("computetotal");
  //get current total depending on the orpeation to add or remove item
  // console.log("computeTotal", count, amount);
  // let currentTotal = totalAmount.innerHTML;
  // if (operation === 'increment'){
  //   currentTotal= parseInt (currentTotal) + (parseInt(amount) * parseInt(count ));
  // } else{
  //   currentTotal= parseInt (currentTotal) - (parseInt(amount) * parseInt(count ));
  // }
  // console.log('currentTotal', currentTotal);
  // return currentTotal;
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    //Get the item price by ID
    let priceField = document.getElementById(`price${i}`);
    console.log("priceField", priceField);
    //Get the item quantity by ID
    let quantityField = document.getElementById(`itemCount${i}`);
    console.log("quantityField", quantityField);

    let computedPrice =
      parseInt(priceField.value) * parseInt(quantityField.value);
    if (index !== i) {
      total += computedPrice; //+= implies total= total + computed price
    }
    else{
      priceField.value = 0;
      quantityField.value = 0;
    }
  }
  return total;
}

function decrementValue(e) {
  let elementId = e.target.getAttribute("data-counter");
  let inputElement = document.getElementById(elementId);
  var parsedValue = parseInt(inputElement.value, 10);
  parsedValue = isNaN(parsedValue) ? 0 : parsedValue;
  if (parsedValue < 10 && parsedValue > 0) {
    parsedValue--;
    inputElement.value = parsedValue;
  }

  let priceFieldId = e.target.getAttribute("data-pricing");
  let priceField = document.getElementById(priceFieldId);
  let computedTotal = computeTotal();
  totalAmount.innerText = computedTotal;
}

function decreaseTotal(count, amount) {
  //get current total
  let currentTotal = totalAmount.innerHTML;

  currentTotal = parseInt(currentTotal) - parseInt(amount) * parseInt(count);
  return currentTotal;
}
