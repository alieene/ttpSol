// Question 1 -- sumOfTwo(a,b,v):

const sumOfTwo = (a,b,v) => {
  const hash = {};
  for (let i = 0; i < a.length; i +=1) {
      hash[v-a[i]] = a[i];
  }
  for(let j = 0; j < b.length; j += 1) {
    if (hash[b[j]]) {
    return true;
    }
  }
  return false;
};
