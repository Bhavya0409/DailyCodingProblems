const testString = "([)]";

const openings = ['(', '[', '{'];
const closings = [')', ']', '}'];

palidrome = (str) => {
  const stack = [];

  for (let i = 0; i < testString.length; i++) {
    const char = testString.charAt(i);
    if (openings.includes(char)) {
      stack.push(char);
    } else {
      if (closings.indexOf(char) === openings.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(palidrome(testString));
