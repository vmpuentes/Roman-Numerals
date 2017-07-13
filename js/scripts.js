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
  var decimals = [1000, 500, 100, 50, 10, 5, 1];
  var romNum = "";
  if (input === 0 || input > 3999) {
    alert("that is not a roman numeral");
  }else {
    for (var i = 0; i < romanNumerals.length; i++) {
      while (input >= decimals[i]) {
        input -= decimals[i];
        romNum += romanNumerals[i];
      }
    }
    return romNum;
  }

}


$(document).ready(function(){
  $("#decimal-to-roman").submit(function(event){
        event.preventDefault();
        //debugger;
        var decimal = $("#decimal").val();
        var output = convertToRoman(decimal);
        //alert(output);
        $("#output-roman").text(output);
  });
});
