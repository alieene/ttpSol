// Question 1 -- sumOfTwo(a,b,v):

const sumOfTwo = (a,b,v) => {
  // initialize an object collector
  const hash = {};
  // push integers from array 'a' to the hash, where keys are the difference between integers and the target value, and corresponding values are the integers
  for (let i = 0; i < a.length; i +=1) {
      hash[v-a[i]] = a[i];
  }
  // loop through the array 'b' to find if any of its integers is equal any of the hash keys, and if it is, return true, otherwise return false
  for(let j = 0; j < b.length; j += 1) {
    if (hash[b[j]]) {
    return true;
    }
  }
  return false;
};
