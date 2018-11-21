module.exports = function findTheLongestWord(sen) {
  //variables
  let longestLength = 0;
  let longestWord = '';

  //map function
  sen.map(word => {

    //check if wordis longer than longest length
    if (word.length > longestLength) {
      //gets the longest word
      longestLength = word.length;
      longestWord = word;
    }
  })
  //returns it
  return longestWord;
}