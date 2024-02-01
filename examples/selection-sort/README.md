## Selection Sort

The selectionSort function sorts the input array arr. It maintains two loops: the outer loop iterates through the entire array, and the inner loop finds the index of the minimum element in the unsorted part of the array. If the minimum element is found at a position different from the current position in the outer loop, a swap is performed between the current element and the minimum element.

The sorting process continues until the entire array is sorted in ascending order. At each step, the minimum element is "selected" and moved to its correct position.

Selection Sort has a time complexity of O(n^2), where n is the number of elements in the array. It is an in-place sorting algorithm, meaning that it does not require additional memory to sort the array. However, it is generally not the most efficient sorting algorithm for large datasets, especially when compared to more advanced algorithms like Merge Sort or Quick Sort. Nevertheless, it is a simple algorithm and easy to implement.