//businessl logic
var convertToRoman = function(input){
  debugger;
  var romanNumerals = ["M", "D", "C", "L", "X", "V", "I"];
  var decimals = [1000, 500, 100, 50, 10, 5, 1];
  var romNum = "";
   var counter = 1;
  var consecutiveNumerals = [];
  if (input <= 0 || input > 3999) {
    alert("that is not a roman numeral");
  }else {
    for (var i = 0; i < romanNumerals.length; i++) {
      while (input >= decimals[i]) {
        input -= decimals[i];
        //romNum += romanNumerals[i];
        consecutiveNumerals. push(romanNumerals[i]);//to track the number of consequative roman numerals
      }
    }
    console.log(consecutiveNumerals);
    for (var i = 0; i < consecutiveNumerals.length; i++) {
       //var temp = consecutiveNumerals[i];
       console.log(consecutiveNumerals[i]);
       console.log(consecutiveNumerals[i+1]);
         if (consecutiveNumerals[i] === consecutiveNumerals[i+1]) {
           console.log("OH HELLO");
           counter++;
           if (counter === 4) {
             var numIndex = romanNumerals.indexOf(consecutiveNumerals[i]);
             romNum = "";
             romNum = romanNumerals[numIndex] + romanNumerals[numIndex-2];
             counter = 1;
           }
         }


      // var counter = 0;
      // if (counter < 4) {
      //   temp +=consecutiveNumerals[i];
      //   counter++;
      // }
    }
    // romNum += consecutiveNumerals[i];
    romNum = consecutiveNumerals.join("");
    console.log(romNum);
    return romNum;
  }

}



$(document).ready(function(){
  $("#decimal-to-roman").submit(function(event){
        event.preventDefault();
        var decimal = $("#decimal").val();
        var output = convertToRoman(decimal);
        //alert(output);
        $("#output-roman").text(output);
  });
});
