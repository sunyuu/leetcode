/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let ret = 0
  let mask = []

  for (let i = 0; i < words.length; i++) {
    let temp = 0
    for (let w of words[i]) {
      temp = temp | (1 << (w.charCodeAt() - 'a'.charCodeAt()))
    }
    mask[i] = temp
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      
      if ((mask[i] & mask[j]) === 0) {
        ret = Math.max(ret, words[i].length * words[j].length)
      }
    }
  }

  return ret
};