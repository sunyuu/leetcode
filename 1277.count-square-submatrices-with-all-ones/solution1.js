/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let ans = 0
  let m = matrix.length, n = matrix[0].length
  let len = Math.min(m, n)

  for (let l = 0; l < len; l++) {
    for (let i = l; i < m; i++) {
      for (let j = l; j < n; j++) {
        let flag = true
        let tempLen = l
        while (tempLen >= 0) {
          if (matrix[i - tempLen][j] > 0 && matrix[i][j - tempLen] > 0) {
            tempLen--
          } else {
            flag = false
            break
          }
        }
        if (l > 0 && matrix[i - 1][j - 1] <= 0) {
          flag = false
        }

        if (flag) {
          matrix[i][j] = l + 1
          ans++
        }
      }
    }

    console.log(ans)
  }

  console.log(matrix)


  return ans
};


console.log(countSquares([[1,1,0,0,1],[1,0,1,1,1],[1,1,1,1,1],[1,0,1,0,1],[0,0,1,0,1]]))