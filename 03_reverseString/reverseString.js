const reverseString = function(reverseThis) {
    var splitStr = reverseThis.split('');
    var reverseArr = splitStr.reverse();
    var joinArr = reverseArr.join('');
    return joinArr;

};

// Do not edit below this line
module.exports = reverseString;
