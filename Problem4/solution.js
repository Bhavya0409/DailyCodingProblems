solution = (arr) => {
  shiftIndex = sort(arr);
  newArr = [];

  // Create a new array of all the positive integers of the first array.
  for (let i = shiftIndex; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  // For each number, if the value - 1 is less than the size of the array and the value of the number at that value's index is greater than 0, make that number negative
  for (let j = 0; j < newArr.length; j++) {
    if (Math.abs(newArr[j]) - 1 < newArr.length && newArr[Math.abs(newArr[j]) - 1] > 0) {
      newArr[Math.abs(newArr[j]) - 1] = -newArr[Math.abs(newArr[j]) - 1];
    }
  }

  // At this point, all numbers will match their index + 1 value so all we have to do is go through the array and find the first positive number,
  // which means that index + 1 value doesn't exist
  for (let k = 0; k < newArr.length; k++) {
    if (newArr[k] > 0) {
      return k + 1;
    }
  }
}

// Sort the array by putting all the negative numbers at the beginning
sort = (arr) => {
  shiftIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      const temp = arr[i];
      arr[i] = arr[shiftIndex];
      arr[shiftIndex++] = temp;
    }
  }

  return shiftIndex;
}

console.log(solution([2, 3, -7, 6, 8, 1, -10, 15]));
