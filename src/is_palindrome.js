const isPalindrome = function (text) {
let textReversed = text.reverse();

if(textReversed == text){
    return true;
} else {
    return false;
}};

module.exports = isPalindrome;

