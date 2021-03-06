# quicklist

QuickList is an array with Amoratized O(1) shift and unshift, with more control over when to expand/shrink the size of the array by providing a **resize threshold**. The default resize threshold is **50**.

The array size will:

1. increase when there is no empty space at the front of the array
2. decrease when there is *threshold* number of empty slots at the front of the array


## Installing

```
npm install quicklist
```

## API

```javascript
const QuickList = require("quicklist");

let myList = new QuickList();

// Adding to back of list
myList.push("foo");

// Adding to front of list
myList.unshift("bar");

// Get element by index
myList.get(0); // "bar"
myList.get(1); // "foo"

console.log(myList.length()); // 2

// Removing from back
console.log(myList.pop()); // "foo"

// Removing from front
console.log(myList.shift()); // "bar"


```

## QuickList Methods


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