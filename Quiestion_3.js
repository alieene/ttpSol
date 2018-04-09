// Question 3 -- getClosingParen(sentence, openingParenIndex):

const getClosingParen = (sentence, openingParenIndex) => {

  let openingNum = 0;
  let closingNum = 0;

  if (sentence[openingParenIndex] === '(' ) {
    for (let i = openingParenIndex + 1; i < sentence.length - 1; i ++){
      if (sentence.charAt(i) === ')'){
        if (openingNum === closingNum){
          return i;
        }
          closingNum ++;
      }
      if (sentence.charAt(i) === '('){
        openingNum ++;
      }
    }
  }
};



