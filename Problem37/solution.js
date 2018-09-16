powerSet = (arr) => {
  const test = [[]];
  arr.forEach((value) => {
    const length = test.length;
    for (let i = 0; i < length; i++) {
      const newSet = test[i].slice();
      newSet.push(value);
      test.push(newSet);
    }
  })

  return test;
}

// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

console.log(powerSet([1, 2, 3]));
