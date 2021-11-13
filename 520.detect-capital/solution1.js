/** 暴力法
 * @param {string} word
 * @return {boolean} 
 */
var detectCapitalUse = function(word) {
  let first = true, second = true
  for (let i = 0; i < word.length; i++) {
    let num = word[i].charCodeAt() - 'A'.charCodeAt()
    if (i === 0) {
      first = num <= 31
    }
    if (i === 1) {
      second = num <= 31
    }
    if (i > 0) {
      if (first) {
        if (i > 1) {
          if (second) {
            if (num > 31) {
              return false
            }
          } else {
            if (num <= 31) {
              return false
            }
          }
        }
      } else {
        if (num <= 31) {
          return false
        }
      }
    }
  }
  return true
};