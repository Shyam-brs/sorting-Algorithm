/** 
Created : 2023 

Script : Merge Sort

Description : write an algorithm for merge sorting

    Merge sort is a divide-and-conquer algorithm that sorts an array by recursively 
    splitting the array in half, sorting each half, and then merging the sorted halves 
    back together. 
    
    The merge sort algorithm is a stable sorting algorithm, which means that the relative order of 
    equal elements is preserved in the sorted array.

**/

/**
 * For the given 2 sorted array's, returns the sorted array
 * @param Array1
 * @param Array2
 * @return Array
 */

// Helper function
// given 2 sorted array it combines them and returns sorted array
function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

/**
 * For the given array, breaks the array in to 2 half and calls the helper function
 * @param array
 * @return Array
 */

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Implementation
const sortedArr = mergeSort([10, 24, 76, 73, 1, 3, 25, 52, 2, 512, 250]);
console.log("Merge sort for the given array is");
console.log(sortedArr);

// BIG O Notation
// Time complexity - O(n log n)
// Space complexity - O(n)
