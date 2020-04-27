// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // Edge Case:  If integer n is negative, return null
  if (n < 0) {
    return null;
  } 
  // Base Cases:  If integer n equals 0, return 1
  // Recursive Case:   Multiply integer n by the factorial function with the parameter of n - 1
  return n === 0 ? 1 : n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // Base Case:  If the array is empty, return zero
  // Recursive Case:  Add first elment of array to the sum function with the parameter of the array excluding the first element
  return !array.length ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let flatArray = array.flat(Infinity);
  // Base Case:  If the array is empty, return zero
  // Recursive Case:  Add first elment of array to the sum function with the parameter of the array excluding the first element
  return !flatArray.length ? 0 : flatArray[0] + arraySum(flatArray.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Base Cases:  
  // If n equals zero, return true
  // If n equals 1, return false
  if (n === 0) {
    return true;
  } else if (n === 1 || n === -1) {
    return false;
  }
  // Recursive Cases:   
  // If n is positive, return the the isEven function with the parameter of n - 2
  // If n is negative, return the the isEven function with the parameter of n + 2
  return n > 0 ? isEven(n - 2) : isEven(n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base Case:  If n equals 0, return 0
  if ( n === 0 ){
    return 0;
  }
  // Recursive Cases: 
  // If n is positive, return n - 1 plus the sumBelow function with the parameter of n - 1
  // If n is negative, return n + 1 plus the sumBelow function with the parameter of n + 1
  return n > 0 ? (n - 1) + sumBelow(n - 1) : (n + 1) + sumBelow(n + 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // Base Case:  If x equals y or x minus y equals 1 or x minus y equals -1, return an empty array
  if(x === y  || x - y === 1 || x - y === - 1){
    return [];
  }
  // Recursive Cases: 
  // If x is less than y (ascending range), return [x + 1] concated with the range function with the parameters of (x + 1, y)
  // If x is greater than y (descending range), return [x - 1] concated with the range function with the parameters of (x - 1, y)
  return x < y ? [x + 1].concat(range(x + 1, y)) : [x - 1].concat(range(x - 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base Case:  If exponent equals zero, return one
  if (exp === 0) {
    return 1;
  }
  // Recursive Cases: 
  // If exponent is positive, multipy base times the exponent function with the parameters of (base, exp - 1)
  // If exponent is negative, divide the exponent function with the parameters of (base, exp + 1) by the base
  return exp > 0 ? base * exponent(base, exp - 1) : exponent(base, exp + 1) / base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base Cases:
  // If n equals 0, return false
  // If n equals 1, return true
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  }
  // Reursive Case:  Return the powerOfTwo function with the parameter of n / 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base Case:  If the string is empty, return an empty string
  // Recursive Case:  Return the reverse function with the paramerter of the string excluding the first character plus the first character of the string
  return string.length === 0 ? '' : reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Remove any spaces from the beginning and end of the string
  let str = string.trim();
  // Base Cases:
  // If the string length is 0 or 1, return true
  // If the first and last character of the string are not equal, return false
  if (str.length <= 1) {
    return true;
  } else if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
    return false;
  }
  // Recursive Case:  Return the palindrome function with the parameter of the string excluding the first and last characters
  return palindrome(str.slice(1, str.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// Base Case:  If x < y, then return x
// Recursive case:  If x > y, subtract y from x and call modulo with new value of x
var modulo = function(x, y) {
//   console.log(x % y);
//   if (y === 0) {
//     return NaN;
//   } else if (x < y) {
//     console.log(x)
//     return x;
//   }
//   console.log(x, y)
//   return y > 0 ? modulo(x - y, y) : modulo(x + y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// Base Case:  If x or y is equal to 0, return 0
// Recursive Cases:
// If y is positive, add x to the multiply function with the parameters of (x, y - 1)
// If y is negative, multiply -1 to the multiply function with the parameters of (x, -y)
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } 
  return y > 0 ? x + multiply(x, y - 1) : -(multiply(x, -y)); 
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
// Base case:  if x equals 0, return 0
// Base case:  if x is less than y, return 0
// Recursive case:  subtract y from x and call divide function with the new value of x
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0 || x < y) {
    return 0;
  } 
  return y > 0 ? 1 + divide(x - y, y) : 0;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  // Base case:  If x = 0, return y
  // Base case:  If y = 0, return x
  if (x === 0) {
    return y;
  } else if (y === 0) {
    return x;
  }
  // Recursive case:  Call the gcd function with the parameters y and the remainder of x / y
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base Cases:  If the string is empty, return true
  if (str1.length === 0 && str2.length === 0) {
    return true;
  } else if ((str1.length === 1 || str2.length === 1) && (str1.length < str2.length || str1.length > str2.length)) {
    // Does either string only have one character?
    // And one string is longer than the other?
    // Yes, so return false since one string is longer than the other
    return false;
  }
  
  // Is the length of string one?
  // And are the first characters of the strings equal?
  if (str1.length === 1 && str1[0] === str2[0]) {
    // Yes, so return true
    return true;
  } else if (str1.length === 1 && str1[0] !== str2[0]) {
    // No, so return false
    return false;
  }
  
  // Return the results of the remaining array
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // Base case
  // Is length of string equal to zero?
  if (str.length === 0) {
    // Yes, so return zero
    return [];
  }
  // Return array with a character of the string at each index . . . 
  // By adding character as an element of the array 
  // and concatenating with remaining characters in the string as array elements
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // Base Case:  If array has no length, return empty array
  // Recursive Case:  concat last element of array with recursive call that removes last element of array
  return !array.length ? [] : [array[array.length -1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // Base Case:  If the length equals 0, return empty array
  // Recursive Case:  Add given value into an array with recursive call that decrements the length
  return length === 0 ? [] : [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Base Case:  If the array length is 0, return 0
  if (!array.length) {
    return 0;
  }
  // Recursive Cases: 
  // If zero index of array equals the value, return 1 plus the recursive call of countOccurences that removes current element
  // Else, return the recursive call of countOccurence that removes current element
  return array[0] === value ? 1 + countOccurrence(array.slice(1), value) : countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base Case:  If the array is empty, return empty array
  // Recursive Case:  Return call with the callback function called on current element of array concated to the recursive call of map without first element
  return !array.length ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // Declare a varaible for the count of occurences
  let count = 0;
  // Loop through the object keys
  for (let property in obj) {
    // Check if the object property is equal to the target key
    if (property === key) {
      // If so, add one to count
      count++;
    }
    // Check if the object property's value is an object
    if (typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
      // If so, check the nested object for the target key
      count += countKeysInObj(obj[property], key);
    }
  }
  // Return the count of occurrences
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  // Declare a varaible for the count of occurences
  let count = 0;
  // Loop through the object keys
  for (let property in obj) {
    // Check if the object property value is equal to the target value
    if (obj[property] === value) {
      // If so, add one to count
      count++;
    }
    // Check if the object property's value is an object
    if (typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
      // If so, check the nested object for the target value
      count += countValuesInObj(obj[property], value);
    }
  }
  // Return the count of occurrences
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  // Declare a varaible for the resulting object
  let newObj = {};
  // Loop through the object keys
  for (let property in obj) {
    // Check if the object property
    if (property === key && typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
      // If property is equal to targeted key and it's value is a nested object, check the nested object for the target key 
      // And assign it to new key name
     newObj[newKey] = replaceKeysInObj(obj[property], key, newKey);
    } else if (property === key) {
      // If property is equal to targeted key, add key/value pair with new key name
      newObj[newKey] = obj[key];
    } else if (typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
      // If property's value is a nested object, check the nested object for the target key
      // And assign it to same key name
      newObj[property] = replaceKeysInObj(obj[property], key, newKey);
    } else {
      // Just add key/value pair as is
      newObj[property] = obj[property];
    }
  }
  // Return the newObj with renamed keys
  return newObj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  // Check n
  if (n <= 0) {
    // If n is less than or equal to 0, return null
    return null;
  } else if (n === 1) {
    // If n is equal to 1, return base array [0, 1]
    return [0, 1];
  } else {
    // Else call fibonacci with the the parameter of n - 1
    const s = fibonacci(n - 1);
    // Add the sum of the previous two elements
    s.push(s[s.length - 1] + s[s.length - 2]);
    // Return resulting array
    return s;
  }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
  // Base Case: If n is negative return null
  if(n < 0){
    return null;
  }
  // Base Case: If n is less than 2 than return n
  // Recursive Case: Return a recursive call of nthFibo with n-1 and add that with a call with n-2
  return n < 2 ? n : nthFibo(n - 1) + nthFibo(n - 2);
};
// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input) {
  // Base Case: If array is empty return []
  // Recursive Case: Return the capitalized string and continue to call capitalizeWords recursively with the array sliced
  return !input.length ? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};
// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array) {
  // Base Case: If array is empty return []
  // Recursive Case: Return the first letter capitalized of each word and continue to call capitalizeFirst recursively with the first element removed
  return !array.length ? [] : [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};
// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj) {
  // If obj is undefined create an object
  if(obj === undefined){
    obj = {};
  }
  // Base Case: if string.length equals 0 return {}
  if(str.length === 0){
    return obj;
  }
  // Check if the first letter of the string is a key in the object
  // And if not add it to the object with a count of 1, else increment the count by 1
  obj[str[0]] = (obj[str[0]] || 0) + 1;
  // Recurvise Case: call letterTally with the first letter omitted and pass the object
  return letterTally(str.slice(1), obj);
};
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list) {
  // Base Case: if list is empty return []
  if(!list.length){
    return [];
  }
  // Recursive Case: If the first element and the second element are equal do a recursive call with the tail end of the array
  // Recursive Case: Otherwise add the first element to the array and concat the recursive call with the tail end of the array
  return list[0] === list[1] ? compress(list.slice(1)) : [list[0]].concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // Base case:  if array is empty, return empty array
  if (!array.length) {
    return [];
  }
  // Recursive case:  if first and second array elements are zero, slice one off and do recursive call
  // If not, add current character to recursive call
  return array[0] === 0 && array[1] === 0 ? minimizeZeroes(array.slice(1)) : [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // Base case:  if array is empty, return empty array
    if (!array.length) {
    return [];
  }
  let last = array[array.length -1];
  // Check if current number is positive or negative and transform appropriately
  if (last >= 0) {
    last = array.length % 2 === 0 ? last * -1 : last;
  } else {
    last = array.length % 2 === 0 ? last : last * -1;
  }
  // Reursive case:  Cut off last index and call alternateSign
  return alternateSign(array.slice(0, array.length - 1)).concat([last]);
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let index = str.search(/[0-9]/);
  // Base case:  if no integers in the string, return the string
  if (index === -1) {
    return str;
  }
  let word;
  // Switch case for changing numbers to words
  switch (str[index]) {
    case '0':
      word = "zero";
      break;
    case '1':
      word = "one";
      break;
    case '2':
      word = "two";
      break;
    case '3':
      word = "three";
      break;
    case '4':
      word = "four";
      break;
    case '5':
      word = "five";
      break;
    case '6':
      word = "six";
      break;
    case '7':
      word = "seven";
      break;
    case '8':
      word = "eight";
      break;
    case '9':
      word = "nine";
  }
  // Recursive case:  Call function numToText
  return str.slice(0, index) + word + numToText(str.slice(index + 1));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  let count = 0;
  if (node === undefined) {
    node = document.body;
  }
  if (node.nodeType === document.ELEMENT_NODE && node.nodeName === tag.toUpperCase()) {
    count++;
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    count += tagCount(tag, node.childNodes[i]);
  }
  return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
var binarySearch = function(array, target, min, max) {
  // Check if min is defined.  If not, initialize to first index of array
  if (min === undefined) {
    min = 0;
  }
  // Check if max is defined.  If not, initialize to last index of array
  if (max === undefined) {
    max = array.length - 1;
  }
  // Calculate the middle index of the array
  const middle = Math.floor((min + max) / 2);
  // Base Case:  
  // If min is greater than max and target is not fount, return null
  // If target is found, return index
  if (min > max) {
    return null;
  } else if (array[middle] === target) {
    return middle;
  }
  // Recursive Cases:  
  // If value of middle element is greater than the target, search the first half of the array by calling binarySearch
  // If value of middle element is less than the target, search the second half of the array by calling binarySearch
  return array[middle] > target ? binarySearch(array, target, min, middle - 1) : binarySearch(array, target, middle + 1, max);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  // Base Case:  If the array is empty or only has one element, return the array
  if (array.length <= 1) {
    return array;
  }
  // Calculate the middle index of the array
  const middle = Math.floor(array.length / 2);
  // Divide the array into left and right
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // Recursive Case:  Use recursion to combine right and left arrays
  return merge( mergeSort(left), mergeSort(right));
  
  
  // Helper function to merge two arrays
  function merge(leftArray, rightArray) {
    let result = [];
    // Loop through the arrays
    while (0 < leftArray.length && 0 < rightArray.length) {
      // Concatenate the element values into resulting array in order
      // And remove element from corresponding array
      if (leftArray[0] < rightArray[0]) {
        result.push(leftArray.shift());
      } else {
        result.push(rightArray.shift());
      }
    }
    return result.concat(leftArray.slice().concat(rightArray.slice()))
  }
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
