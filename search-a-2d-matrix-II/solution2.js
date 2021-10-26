/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length
  
  for (let i = 0; i < m; i++) {

    let l = 0, r = n - 1

    while (l < r) {
      let mid = Math.floor( (l + r) / 2 )

      if (matrix[i][mid] <= target) l = mid
      else r = mid - 1
    }
    if (matrix[i][l] ===  target) return true
  }
  return false
};