justify = (words, spacing) => {
  return justifyHelper(words, spacing, 0, []);
}

justifyHelper = (words, spacing, count, answer) => {
  let lineWords = [];
  let stringCount = 0;

  // Iterate through words until the count is the length of array, or the length of next string surpasses the spacing max
  while (count < words.length && stringCount + words[count].length + 1 <= spacing) {
    lineWords.push(words[count]);
    stringCount += words[count].length;
    count++;
    if (lineWords.length !== 1) {
      // if its not the first word, add 1 to count for a space
      stringCount += 1;
    }
  }

  // When limit is reached, get the string for the requested lineWords and push it

  const lineString = getLineString(lineWords, stringCount, spacing);
  answer.push(lineString);
  if (count === words.length) {
    // if the words array has been traversed completely, return the array
    return answer;
  }

  // otherwise continue with updated count and answer array
  return justifyHelper(words, spacing, count, answer);
}

/**
 * Using the list of words in the line, get the corresponding string to be added to the array
 * @param  {[Array]}   lineWords   List of words in the line
 * @param  {[integer]} stringCount Count of all the characters of the string + spaces after words except last
 * @param  {[integer]} spacing     Max spacing
 * @return {[string]}              String that the lineWords equates to
 */
getLineString = (lineWords, stringCount, spacing) => {
  let lineString;
  if (stringCount < spacing) {
    // String does not have max character, so we need to add spaces
    if (lineWords.length === 1) {
      // If its only one word, add spaces = spacing - stringCount
      return Array(spacing - stringCount).fill().reduce((acc, val) => {
        return acc + ' '
      }, lineWords[0])
    }
    // Otherwise, get an array of spaces that must be added after every word
    numSpaces = getNumSpaces(lineWords, stringCount, spacing);

    // Construct the string...
    lineString = lineWords.reduce((acc, word, index) => {
      if (index === lineWords.length - 1) {
        // if its the last word, dont add any spaces
        return acc + word;
      } else {
        // Otherwise, add spaces based on the index of the numSpaces array
        const numSpace = numSpaces[index];
        return Array(numSpace).fill().reduce((acc, val) => {
          return acc + ' '
        }, acc + word + ' ')
      }
    }, '')
  } else {
    // If the string count is equal to the spacing, just add one space after each word
    lineString = lineWords.reduce((acc, word, index) => {
      if (index === lineWords.length - 1) {
        return acc + word;
      } else {
        return acc + word + ' ';
      }
    }, '')
  }

  return lineString;
}

/**
 * Return an array with the number of spaces to add after each word (excluding last)
 * @param  {[Array]}   lineWords   List of words in the line
 * @param  {[integer]} stringCount Count of all the characters of the string + spaces after words except last
 * @param  {[integer]} spacing     Max spacing
 * @return {[Array]}               Array of number of spaces after each word
 */
getNumSpaces = (lineWords, stringCount, spacing) => {
  const diff = spacing - stringCount;
  const spaceCount = lineWords.length - 1;
  const numSpaces = [];
  lineWords.forEach((word, index) => {
    if (index !== lineWords.length - 1) {
      if (index < diff % spaceCount) {
        numSpaces.push(Math.floor(diff / spaceCount) + 1);
      } else {
        numSpaces.push(Math.floor(diff / spaceCount))
      }
    }
  })
  return numSpaces;
}

console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", 'test'], 17));