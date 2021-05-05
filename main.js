// Check if a number is within a given range.
const ifInRange = (n, { min, max }) => {
    if (n <= max && n >= min) {
        return true;
    }
    return false;
};

console.log(ifInRange(4, { min: 0, max: 5 })); //4 true
console.log(ifInRange(4, { min: 4, max: 5 })); //4 true
console.log(ifInRange(4, { min: 6, max: 10 })); //4 false
console.log(ifInRange(5, { min: 5, max: 5 })); //5 true

// Scrabble
const arrayOfObj = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];

function totalMaxScore(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].score;
    }
    return sum;
}
console.log(totalMaxScore(arrayOfObj));

// Is it an empty object?

const isItEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

console.log(isItEmpty({})); // true
console.log(isItEmpty({ a: 1 })); // false

// Counting Letters
const countLetters = (string) => {
    const count = {};
    for (const letters of string) {
        if (count[letters]) {
            count[letters]++;
        } else {
            count[letters] = 1;
        }
    }
    return count;
};

console.log(countLetters("tree")); //  {t: 1, r: 1, e: 2}

// Free Shipping.
function freeShipping(obj) {
    let sum = 0;
    for (let prop of Object.values(obj)) {
        sum += prop;
    }
    console.log(sum);
}

freeShipping({ Sponge: 3.5, Soap: 5.99 }); // false
freeShipping({ "Surround Sound Equipment": 499.99 }); // true
freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }); // false

// Programming Object.
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");

// - Change the difficulty to the value of 7.
programming.difficulty = 7;

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// - Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
// - Using a loop, iterate through the languages array and console.log all of the languages.
for (let i of Object.values(programming.languages)) {
    console.log(i);
}
// - Using a loop, console.log all of the keys in the programming object.
for (let prop of Object.keys(programming)) {
    console.log(prop);
}
// Using a loop, console.log all of the values in the programming object.
for (let value of Object.values(programming)) {
    console.log(value);
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
programming.isRewardingAndChallenging = function () {
    if (this.isChallenging && this.isRewarding === true) {
        return ` Learning the programing languages: ${this.languages} is rewarding and challenging.`;
    } else {
        return `NOT rewarding.`;
    }
};

console.log(programming.isRewardingAndChallenging());
console.log(programming);

// ** Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

console.log(programming.isRewardingAndChallenging); // When we log the method without invoking it, we just calling the method not the value.


// Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming);
console.log(Object.isFrozen(programming)); // true