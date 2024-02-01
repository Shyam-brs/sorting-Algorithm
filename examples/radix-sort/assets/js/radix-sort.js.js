/** 
Created : 2023 

Script : Radix Sort

Description : write an algorithm for radix sorting

    Radix sort is a non-comparative sorting algorithm that sorts data with integer keys by grouping the keys 
    by individual digits that share the same significant position and value (place value). 

    The algorithm works by repeatedly sorting the elements by their significant digits, from the least 
    significant to the most significant, until the final sorted order is achieved.

**/

// Helper functions
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort Algorithm
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// Implementation
const sortedArr = radixSort([
  1, 34, 111, 109, 4, 123, 333, 321, 897, 31, 55, 66, 77, 1856, 56784,
]);
console.log("Radix sort for the given array is");
console.log(sortedArr);

// BIG O Notation
// Time complexity - O(k * n)
// Space complexity - O(K + n)

// where 'k' is max number of digits in input number, 'n' is number of elements
