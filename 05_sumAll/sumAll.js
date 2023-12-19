const sumAll = function(firstNum, secondNum) {
    // Check if inputs are integers
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) { //Checks if the input is an integer
        return 'ERROR';
    }

    var numSum = 0; //Result of the factorial operation

    if (firstNum >= 0 && secondNum >= 0) { //Checks to see if both inputs are a positive integer
        if (firstNum < secondNum) { 
            for (var i = firstNum; i <= secondNum; i++) { //Loops through a range and performs a factorial opertion
                numSum += i;
            }
            return numSum;
        } else {
            for (var i = secondNum; i <= firstNum; i++) {
                numSum += i;
            }
            return numSum;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
