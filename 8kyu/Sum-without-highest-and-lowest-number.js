/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

function sumArray(array) {
    if (array == null) {
      return 0;
    }
    let sum = 0;
    let sortArray = array.sort();
    for (let i = 1; i < (sortArray.length - 1); i++) {
      sum += sortArray[i];
    }
    return sum;
  }
  console.log(" Result: " + sumArray([6, 2, 1, 8, 10 ]));