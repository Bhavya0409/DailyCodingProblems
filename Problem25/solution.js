regexTest = (str, regex) => {
  // for (let i = regex.length - 1; i >= 0; i--) {
  //   const char = regex.charAt(i);
  //
  //   if (char === '.') {
  //     str = str.slice(0, str.length -1);
  //   } else if (char === '*') {
  //     const preceding = regex.charAt(i - 1);
  //     const nextRegexCharacterToCheck = i >= 2 ? regex.charAt(i-2) : '';
  //     const nextStrCharacterToCheck = str.charAt(str.length - 1)
  //
  //     while (nextStrCharacterToCheck !== nextRegexCharacterToCheck) {
  //
  //     }
  //   } else {
  //     if (str.charAt(str.length - 1) === char) {
  //       str = str.slice(0, str.length -1);
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  //
  // return str.length === 0;
}

regexTestForward = (str, regex) => {
  for (let i = 0; i < regex.length; i++) {
    const char = regex.charAt(i);
    let nextChar = null;
    if (i !== regex.length - 1) {
      nextChar = regex.charAt(i+1);
    }

    if (nextChar !== null && nextChar === '*') {
      // TODO
      i+=2;
    } else {
      // check characters
      if (char === '.') {
        str = str.slice(1, str.length);
      } else if (char === '*') {
        console.log('char is *, I SHOULD NEVER PRINT');
      } else if (char === str.charAt(0)) {
        if (str.length !== 1) {
          str = str.slice(1, str.length);
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  return str.length === 0;
}

console.log(regexTestForward('.*at', 'chat'));
