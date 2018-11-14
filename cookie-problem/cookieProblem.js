module.exports = function cookieProblem(array) {
  let max = Math.max.apply(null, array);
  let total = [];
  array.forEach((i) =>{
   let findCookie = max-i;
   total.push(findCookie); 
  });
  let sum = total.reduce((accum, curr) =>{
    return accum + curr;
  });
  return sum;
}