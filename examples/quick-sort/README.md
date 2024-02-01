## Quick Sort

The swap function takes an array and two indices, firstIndex and secondIndex, and swaps the elements at those indices in the array.

The pivot function is a helper function used in the Quick Sort algorithm. It selects a pivot element from the array (defaulting to the first element) and arranges the elements such that all elements less than the pivot are moved to the left side, and all elements greater than the pivot are moved to the right side. It returns the index where the pivot element is placed after the rearrangement.

The quickSort function is an implementation of the Quick Sort algorithm. It recursively divides the input array into smaller subarrays by choosing a pivot element and then sorting the elements on its left and right sides using the pivot function. The process continues until all subarrays have only one element or are empty. The final sorted array is returned.