// Question 2 -- stringReformatting(string):

const stringReformatting = (s, k) => {
  //loop through string s and add all of its non-'-' values to string s2, so the resulting string s2 is initial s without '-' charachters
  let s2 ='';
  for (let char of s) {
    char !== '-' ? s2 += char : s = s.slice(char);
  }
  //populate an array from s2
  const a = Array.from(s2);
  // initialize a temporary array to unshift into, and then join k number of elements from array 'a'
  const b = [];
  // initialize the result array to unshift grouped elements from temporary array 'b'
  const result = [];
    while(a.length > 0) {
        const b = [];
        // k number of times pop elements from array a to temporary array b
        for(let i = 0; i < k; i++) {
            b.unshift(a.pop());
        }
        // join k number of elements in array b, and then, unshift them to the result array
        result.unshift(b.join(''));
    }
    // join the result array in form of string
    return result.join('-');
};
