module.exports = function needleInHaystack(haystack) {
  let needle = haystack.includes("needle")
  if(needle === true){
    return haystack.indexOf("needle");
  } else {
    return false;
  }
} 