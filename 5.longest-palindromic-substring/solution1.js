/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  let maxLen = 1
  let len = s.length
  let dp = Array.from(new Array(len), () => new Array(len))
  let begin = 0
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      let j = i + L - 1
      if (s[i] == s[j]) {
        if (L < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      } else {
        dp[i][j] = false
      }

      if (dp[i][j]) {
        maxLen = Math.max(maxLen, L)
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLen)
}