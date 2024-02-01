/** 
Created : 2023

Script : Selection Sort

Description : write an algorithm for selection sorting

    Selection sort is a simple sorting algorithm that repeatedly finds the minimum (or maximum) element 
    in an array and swaps it with the first (or last) element. The algorithm works by repeatedly scanning 
    the array, finding the minimum element, and swapping it with the first element. 
    
    This process is repeated until the entire array is sorted.

**/

/**
 * For the given 2 sorted array's, returns the sorted array
 * @param Array1
 * @return Array
 */

// Selection Sort Algorithm
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]); //helper function to swap the values of 2 elements in an array

  for (let i = 0; i < arr.length; i++) {
    // main loop to iterate the entire array
    let lowest = i; // to track the index of min value
    for (let j = i + 1; j < arr.length; j++) {
      //inner loop - searches for a smaller value, if found "lowest" is updated
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

// Implementation
const sortedArr = selectionSort([
  1, 34, 111, 109, 4, 123, 333, 321, 897, 31, 55, 66, 77, 1856, 56784,
]);
console.log("The selection sort for the given array is ");
console.log(sortedArr);

// BIG O Notation
// Time complexity - O(n^2)
// Space complexity - O(1)
