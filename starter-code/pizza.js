// Write your Pizza Builder JavaScript in this file.

var ingredients = [
  {name: "Sucuk", class: "sucuk", price: "$3"},
  {name: "Extra cheese", class: "extra-cheese", price: "$2"},
  {name: "Mortadella", class: "mortadella", price: "$3"},
]
var Pizza = function (ingredients) {
  this.ingredients = ingredients;

}

$(document).ready(function() {
  var pizza = new Pizza(ingredients);
  var extraBtns = '';
  // dynamic button injection
  pizza.ingredients.forEach(function (pic, index) {
    extraBtns += '<li><button class= "btn btn-' + pic.class + ' active">'; 
    extraBtns += pic.name + '</button></li>'
  })
  var extraPrices = '';
  // dynamic price injection
  pizza.ingredients.forEach(function (pic, index) {
  extraPrices += '<li id="price-' +pic.class+ '"class="elt-price">'+pic.price+ " " +pic.name+'</li>'
  })    
  // add html to extra buttons div
  $('#extra-btns').html(extraBtns);
  $('#extra-prices').html(extraPrices);
})

function getPriceOfElement() {

  // $('.elt-price').each(function (index) { 
  //   console.log(index + ": " + $(this).text());
  // });

  var sum = $('#price-sum').html();



  return priceOfElement;
}


$(function() {
  // Adding peperonni on click
  $(".btn-pepperonni").click(function() {
      $(".pep").toggle();
      $(this).addClass("active");
      $("#price-pep").toggle();

  })
  // Adding mushrooms on lick
  $(".btn-mushrooms").click(function() {
   $(".mushroom").toggle(); 
   $("#price-mush").toggle();
   
  })
  // Adding green peppers on click
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $("#price-green-peppers").toggle();
  })
  // defaulting sauce and crust
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");

  // adding white sauce on click
  $(".btn-sauce").click(function () {
    $(".sauce").toggleClass("sauce-white");
    $("#price-white-sauce").toggle();
  })

  // adding gluten free crust on click
  $(".btn-crust").click(function () {
    $(".crust").toggleClass("crust-gluten-free ");
    $("#price-g-f-crust").toggle();
  })

  $(".btn").removeClass("active");


});