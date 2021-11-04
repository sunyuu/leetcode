/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  let n = s.length
  if (n <= numRows || numRows === 1) return s
  let ret = ''
  let cycleLen = 2 * numRows - 2

  // 按行一层层相加
  for (let i = 0; i < numRows; i ++) {
    for (let j = 0; j + i < n; j += cycleLen) {
      ret += s[j + i]
      if (i > 0 && i < numRows - 1 && j + cycleLen - i < n) {
        ret += s[j + cycleLen - i]
      }
    }
  }

  return ret
};