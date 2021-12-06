/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  let ret = '', count = 0
  for (let i = 0; i < s.length; i++) {
    let l = s.charAt(i)
    if (l === ' ') count++
    if (count < k) ret += l
  }
  return ret
};