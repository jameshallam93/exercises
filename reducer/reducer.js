
// Instructions:
// In this exercise, you will be implementing a simplified version of the reduce method.
// Please follow the steps below in order to complete the exercise.
// By the end, you should have a working implementation of the reduce method that can be called on any array,
// and hopefully a better understanding of what reduce() is doing under the hood!
// Feel free to run `node reducer.js` and play about with the log statements to understand what has been done so far - it
// is worth understanding what `this` is referring to in the context of the prototype method.

// Creating a prototype method on the Array class means that we can call our method on any array that we define in our code.
// After we define this method, we can call it on an array like so:
// const myArray = [1, 2, 3, 4, 5];
// const sum = myArray.my_reducer();
Array.prototype.my_reducer = function() {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        // STEP 1:
        // finish off this loop so that we add each element from the list to total, using the add() function defined at the bottom of the page.
        console.log(`Element number ${i+1} in the list is ${this[i]}`);
        console.log(`The total is ${total}`);
    }

    return total;
}

const myArray = [1, 2, 3, 4, 5];
const sum = myArray.my_reducer() // should return 15

// STEP 2:
// Instead of calling the add function directly, pass it through to my_reducer as a parameter
// UNCOMMENT THE LINES BELOW
// const sum2 = myArray.my_reducer(add)
// console.log(sum2) // should return 15


// STEP 3:
// Add a new parameter to my_reducer, which will be the initial value of the total variable
// You will need to update my_reducer to handle this new parameter
// UNCOMMENT THE LINES BELOW
// const initialValue = 10
// const sum3 = myArray.my_reducer(add, initialValue)
// console.log(sum3) // should return 25


// STEP 4:
// Add an extra parameter to the callback function, which will be the index of the current element in the list
// This is represented by i in the addNumbersAndIndex function at the bottom of the page.
// Update the my_reducer function to handle this new parameter
// UNCOMMENT THE LINES BELOW
// const sum4 = myArray.my_reducer(addNumbersAndIndex)
// console.log(sum4) // should return 25

// STEP 5:
// Add an extra parameter to the callback function, which will be the list itself
// This is represented by arr in the addNextElement function at the bottom of the page.
// Update the my_reducer function to handle this new parameter
// UNCOMMENT THE LINES BELOW
// const initialValue = 0
// const sum5 = myArray.my_reducer(addNextElement, initialValue)
// console.log(sum5) // should return 29


// STEP 6:
// Write an inline function in the my_reducer method which multiplies all the elements in the list together
// UNCOMMENT THE LINES BELOW
// const product = myArray.my_reducer((total, value) => {
//     // TODO: write me
// })



// Helper functions

const add = (total, value) => {
    // Adds two numbers together
    return total + value;
}
const addNumbersAndIndex = (total, value, i) => {
    // Adds two numbers together, as well as the index of the current element in the list
    return total + value + i;
}

const addNextElement = (total, value, i, arr) => {
    // Adds two numbers together, as well as the next element in the list.
    // if there is no next element, it will just add the current element to the total
    if (i > arr.length - 2){
        return total + value;
    }
    return total + value + arr[i+1];
}
