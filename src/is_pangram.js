const isPangram = function(text) {
// change input text to lower case

text.toLowerCase()

//all alphabet letters
let letters = "abcdefghijklmnopqrstuvwxyz".split('');


//check if all letters are included
for(let letter of letters){
    if(!text.includes(letter)){
        return false
    }
}

return true

};
module.exports = isPangram;
