/**
 * 自己的方法，效率较低
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let ret = 0
  let bitarr = []
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      
      let biti = 0, bitj = 0
      if (bitarr[i]) {
        biti = bitarr[i]
      } else {
        for (let wi of words[i]) {
          biti = biti | (1 << (wi.charCodeAt() - 'a'.charCodeAt()))
        }
        bitarr[i] = biti
      }
      
      if (bitj[j]) {
        bitj = bitarr[j]
      } else {
        for (let wj of words[j]) {
          bitj = bitj | (1 << (wj.charCodeAt() - 'a'.charCodeAt()))
        }
        bitarr[j] = bitj
      }
      
      if ((biti & bitj) === 0) {
        ret = Math.max(ret, words[i].length * words[j].length)
        // console.log(ret)
      }
    }
  }

  return ret
};