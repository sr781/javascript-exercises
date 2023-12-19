const leapYears = function(leapYearCheck) {
    if(leapYearCheck % 4 === 0){ //Checks to see if it is divisble by 4
        if (leapYearCheck % 100 === 0){ //Checks to see if this is valid
            if (leapYearCheck % 400 === 0){ //If the previous 'if' statement is valid, this one must be as well for it to be a leap year
                return true;
            } else{
                return false;
            }

        }
        return true;

    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
