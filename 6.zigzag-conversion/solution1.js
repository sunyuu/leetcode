/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (s.length <= numRows) return s
  let resArr = []
  let index = 0
  let direction = true
  for (let i = 0; i < s.length; i++) {
    resArr[index] = (resArr[index] ? resArr[index] : '') + s[i]
    index += direction ? 1 : -1
    if (index === 0 || index === numRows - 1) direction = !direction
  }
  return resArr.join('')
};