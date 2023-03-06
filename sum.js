// const theSum = (num1, num2, num3, num4) => {
//   return (num1 || 0) + (num2 || null) + (num3 || null) + (num4 || null);
// };
// module.exports = theSum;

/* 
JSDoc
*/

/*
the theSum
*/
const theSum = (...numbers) => {
    return numbers.reduce((pv, cv) => pv + cv , 0);
  };
  module.exports = theSum;
  