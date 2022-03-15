console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(partsNeeded); // DONE

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges); // DONE

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

console.log(supplyChanges[1]); // DONE

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedValue = supplyChanges.pop();
console.log(removedValue); // DONE

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push(25);
console.log(supplyChanges); // DONE

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

// THE FOLLOWING FUNCTION AND FOR LOOP WERE KEPT IN THE CODE SO THAT I COULD REMEMBER MY THOUGHT PROCESS WHILE SOLVING PROBLEM #6.
// AND IT HELPS TO SOLIDIFY MY UNDERSTANDING OF THE .sort() AND .slice() FUNCTIONS. 😁

/*function compareNumbers(a, b) {
  return a - b;
}
supplyChanges.sort();
supplyChanges.sort(compareNumbers); // The function compareNumbers helps the sort() function sort the array numerically in respect to each index's value.

console.log(supplyChanges); */

/*for (i = 0; i < supplyChanges.length; i++) {
  let negativeSupplyChanges = supplyChanges.slice(2, 3); // This variable stores the value of -6 in an array.
  let neutralSupplyChanges = supplyChanges.slice(3, 4); // This variable stores the value of 0 in an array.
  let positiveSupplyChanges = [].concat(
    supplyChanges.slice(0, 2),
    supplyChanges.slice(-2)
  ); // This variable stores the values of 3, 5, 7, and 25 in an array.
if (negativeSupplyChanges === )
}
console.log(positiveSupplyChanges);
console.log(negativeSupplyChanges);
console.log(neutralSupplyChanges); */

for (let i = 0; i < supplyChanges.length; i++) {
  if (supplyChanges[i] > 0) {
    console.log(`Added ${supplyChanges[i]} parts`);
  } else if (supplyChanges[i] === 0) {
    console.log(`No change`);
  } else if (supplyChanges[i] < 0) {
    console.log(`Removed ${supplyChanges[i]} parts`);
  }
} // DONE

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for (let supply of supplyChanges) {
  if (supply > 0) {
    console.log(`Added ${supply} parts`);
  } else if (supply === 0) {
    console.log(`No change`);
  } else if (supply < 0) {
    console.log(`Removed ${supply} parts`);
  }
} // DONE

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

const sumOfSupplyChanges = supplyChanges.reduce(
  (partialSum, a) => partialSum + a,
  0
);
console.log(sumOfSupplyChanges); // DONE

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

// Office hours notes: pseudocode it out

// I need to loop until parts is greater than or equal to 7
// LOOP TIME!
// subtract 7 from parts for each box filled

let partCount = 572;
let boxesFilled = 0;

while (partCount >= 7) {
  partCount -= 7; // subtract 7 from partCount each time the loop runs
  boxesFilled += 1; // fill a box each time the loop runs
}

console.log(`I filled ${boxesFilled} boxes with parts!`);
console.log(`There are ${partCount} parts remaining.`); // DONE
