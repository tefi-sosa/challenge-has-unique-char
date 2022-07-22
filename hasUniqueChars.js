
// Write your code below

function hasUniqueCar (word) {
    word = word.split('');
    let characters = [];
    for (let i = 0; i < word.length; i++) {
        if (characters.includes(word[i]) === false) {
        characters.push(word[i])
        }        
    }
    return word.length === characters.length;
}

// SOLUTION USING SET()

// function hasUniqueCar (word) {
//     return new Set(word).size === word.length;
// }

console.log(hasUniqueCar("Bob"))