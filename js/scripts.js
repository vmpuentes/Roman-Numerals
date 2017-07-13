//businessl logic
// var convertToRoman = function(input){
//   var romanNumeral = {];
//   romanNumeral = ['I','V','X','L','C','D','M'];
//   var decimal = [];
//   decimal = [1,5,10,50,100,500,1000];
//   function decimalToRoman(#decimal) {
//     for (index=0, index > 4000 )
//   }
// }
var convertToRoman = function(input){
  var romanNumerals = ["M", "D", "C", "L", "X", "V", "I"];
  var decimals = [1000,500, 100, 50, 10, 5,1];
  if (input === 0 || input > 3999) {
    alert("that is not a roman numeral");
    //break;
  }

}


$(document).ready(function(){
  $("#decimal-to-roman").submit(function(event){
        event.preventDefault();
        debugger;
        var decimal = $("#decimal").val();
        convertToRoman(decimal);
  });
});
