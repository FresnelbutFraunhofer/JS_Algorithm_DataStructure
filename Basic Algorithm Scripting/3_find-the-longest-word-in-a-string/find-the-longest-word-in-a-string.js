function findLongestWordLength(str) {
    let max = 0;
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++){
      if(array[i].length > max){
        max = array[i].length;
      }
    }
    return max;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));