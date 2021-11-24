/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
  let cnt = new Map()
  let ans = []
  let ret = ''

  for (let i = 0; i < s.length; i++) {
    cnt.set(s[i], (cnt.get(s[i]) || 0) + 1)
  }

  ans[0] = cnt.get('z') || 0
  ans[2] = cnt.get('w') || 0
  ans[4] = cnt.get('u') || 0
  ans[6] = cnt.get('x') || 0
  ans[8] = cnt.get('g') || 0

  ans[7] = (cnt.get('s') || 0) - ans[6]
  ans[5] = (cnt.get('f') || 0) - ans[4]
  ans[3] = (cnt.get('h') || 0) - ans[8]

  ans[9] = (cnt.get('i') || 0) - ans[5] - ans[8] - ans[6]
  ans[1] = (cnt.get('o') || 0) - ans[2] - ans[4] - ans[0]

  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i]; j++) {
      ret += i.toString()
    }
  }

  return ret
};