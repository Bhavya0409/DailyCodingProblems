withDivision = (arr) => {
  const multp = arr.reduce((mult, num) => mult * num, 1)

  const solution = []

  arr.map(num => solution.push(multp/num));

  console.log(solution);
}

withoutDivision = (arr) => {
  newArr = [];

  arr.map(num, index => {
    newArr.push(arr.reduce((result, insideNum, insideIndex) => {
      return insideIndex !== index ? result * insideNum : result
    }, 1))
  });

  console.log(newArr);
}

withDivision([1, 2, 4]);
