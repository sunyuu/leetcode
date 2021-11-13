/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length < 2) return true

  let second = word[1].charCodeAt() < 91

  for (let i = 2; i < word.length; i++) {
    if (word[i].charCodeAt() < 91 !== second) {
      return false
    }
  }

  return word[0].charCodeAt() < 91 || !second
};