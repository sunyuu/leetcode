/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let lpArr = new Array(26).fill(0)
  let ret = ''
  for (let i = 0; i < licensePlate.length; i++) {
    licensePlate = licensePlate.toLowerCase()
    if (licensePlate.charCodeAt(i) >= 97 && licensePlate.charCodeAt(i) <= 122) {
      lpArr[licensePlate.charCodeAt(i) - 'a'.charCodeAt()]++
    }
  }

  for (let i = 0; i < words.length; i++) {
    let wordArr = new Array(26).fill(0)
    for (let j = 0; j < words[i].length; j++) {
      wordArr[words[i].charCodeAt(j) - 'a'.charCodeAt()]++
    }

    let isComplete = true

    for (let m = 0; m < 26; m++) {
      if (wordArr[m] < lpArr[m]) {
        isComplete = false
        break
      }
    }

    if (isComplete) {
      if (!ret) {
        ret = words[i]
      } else if (words[i].length < ret.length) {
        ret = words[i]
      }
    }
  }

  return ret
};