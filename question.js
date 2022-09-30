//1

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] !== arr[j] && arr[i] + arr[j] ===0){
                return true
            }
        }
    }
    return false
}

//runtime is O(n^2) because of nested for loops space == O(n^2)

//2

const hasUniqueCharacters = (lettersArr) => {
    let uniqueCharacters = ''
    for(let i = 0; i < lettersArr.length; i++){
        if(uniqueCharacters.includes(lettersArr[i]) === false){
            uniqueCharacters += lettersArr[i]
        }else{
            return false
        }
    }
    return true
}
console.log(hasUniqueCharacters('moonday'))

//runtime = O(n) space ==O(n)

//3

const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

//runtime = O(n) space == O(n)

//4


const findLongestWord = arr => {
    let longestWord = 'a'
    //console.log(longestWord.length)
    for(let i = 0; i < arr.length; i++){
     // console.log(arr[i].length)
        if(arr[i].length > longestWord.length){
          console.log(arr[1])
            longestWord = arr[1].length
            
            console.log(longestWord)
        }
    }
    return longestWord
}

//runtime === Object(N) space == O(1)