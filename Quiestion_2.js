// Question 2 -- stringReformatting(string):

const stringReformatting = (s, k) => {
  let s2 ='';
  for (let char of s) {
    char !== '-' ? s2 += char : s = s.slice(char);
  }
  const a = Array.from(s2);
  const result = [];
  const b = [];
    while(a.length > 0) {
        const b = [];
        for(let i = 0; i < k; i++) {
            b.unshift(a.pop());
        }
        result.unshift(b.join(''));
    }
    return result.join('-');
};
