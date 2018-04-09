// Question 3 -- getClosingParen(sentence, openingParenIndex):

const getClosingParen = (sentence, openingParenIndex) => {
// initialize opening and closing parentheses' counters
  let openingNum = 0;
  let closingNum = 0;

// when first opening parentheses if found, loop through the rest of the string
  if (sentence[openingParenIndex] === '(' ) {
    for (let i = openingParenIndex + 1; i < sentence.length - 1; i ++){
      //when first closing parentheses is found
      if (sentence.charAt(i) === ')'){
        // check if opening and closing parentheses' counters are equal (for the first one they both will be zero), and if they are, return the index of the closing parentheses
        if (openingNum === closingNum){
          return i;
        }
        // if they weren't equal add to closing parentheses counter
          closingNum ++;
      }
      // if the next after opening parentheses is opening parentheses too, add to the opening parentheses counter
      if (sentence.charAt(i) === '('){
        openingNum ++;
      }
    }
  }
};



