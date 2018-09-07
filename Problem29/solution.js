encode = (str) => {
  let encodedString = ''
  let char = null;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (char === null) {
      char = c;
      count = 1;
      continue;
    }

    if (char === c) {
      count++;
    } else {
      encodedString += `${count}${char}`
      char = c;
      count = 1;
    }
  }

  encodedString += `${count}${char}`

  return encodedString;
}

decode = (str) => {
  let decodedString = '';
  for (let i = 0; i < str.length; i += 2) {
    const num = parseInt(str.charAt(i));
    const char = str.charAt(i + 1);
    for (let j = 0; j < num; j++) {
      decodedString += char;
    }
  }

  return decodedString;
}

console.log(encode('AAAABBBCCDAA'));
console.log(decode('4A3B2C1D2A'))