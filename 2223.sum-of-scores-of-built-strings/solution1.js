/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    // z函数
    let n = s.length
    let z = new Array(n).fill(0)
    let ans = n
    for (let i = 1, l = 0, r = 0; i < n; i++) {
        z[i] = Math.max(Math.min(z[i - l], r - i + 1), 0)
        while (i + z[i] < n && s.charAt(z[i]) === s.charAt(z[i] + i)) {
            l = i
            r = i + z[i]
            ++z[i]
        }
        ans += z[i]
    }

    return ans
};