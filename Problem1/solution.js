const arr = [10, 15, 3, 8];
const k = 23;

solution = () => {
  let complement = {};
  for (let i = 0; i < arr.length; i++) {
    const num = k - arr[i];
    if (complement.hasOwnProperty(arr[i])) {
      return true;
    } else {
      complement[num] = true;
    }
  }

  return false;
}

console.log(solution());
