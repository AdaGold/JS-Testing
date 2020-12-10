const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = function(text) {
    const letterCount = {};
    const letters = text.split('');
    letters.forEach(letter => {
       if (letterCount[letter]) {
           letterCount[letter]+= 1; //if the letter exits, add one to the counter
        }else {
            letterCount[letter] = 1;//else add the letter and assign a 1 value
        }
   
    });

    for (const element of ALPHABET) {
        if (!letterCount[element]){
            return false;
        }
    }
    return true;
};

module.exports = isPangram;
