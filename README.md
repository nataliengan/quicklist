# quicklist

** WORK IN PROGRESS **

QuickList is an array with Amoratized O(1) shift and unshift, with more control over when to expand/shrink the size of the array by providing a **resize threshold**. The default resize threshold is **50**.

The array will increase or decrease in size when:

1. there is no empty space at the front of the array
2. there is *threshold* number of empty slots at the front of the array


**QuickList Methods**
=================

| Method | Description |
| ------- | ------------ |
| push(*elem*) | Adds an element to the end of the array |
| pop()  | Removes and returns the last element of the array |
| unshift(*elem*) | Adds an element to the front of the array |
| shift() | Removes and returns the first element of the array |
| get(*index*) | Returns the element at the given index |
| isEmpty() | Returns true if the list is empty |
| length() | Returns the length of the array (number of elements) |
| forEach(*callback*) | Execute the provided *callback* function for each array element |
| map(*callback*) | Creates a new array with the results of calling a provided *callback* function on every element in the array |
| filter(*callback*) | Creates a new array with all elements that pass the test implemented by the provided *callback* function |
| reduce(*callback*, *initialVal*) | Applies a function against an accumulator and each element in the array to reduce it to a single value |