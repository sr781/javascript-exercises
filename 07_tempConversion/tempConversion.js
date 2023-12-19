const convertToCelsius = function(fahrenheit) {
  var celsius = (fahrenheit - 32) * (5/9);
  return parseFloat(celsius.toFixed(1)); //Rounds to 1 decimal point

};

const convertToFahrenheit = function(celsius) {
  var fahrenheit = (celsius * (9/5)) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
