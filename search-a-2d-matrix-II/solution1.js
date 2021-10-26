/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 // bst 解法
 var searchMatrix = function(matrix, target) {
  let n = matrix.length, m = matrix[0].length
  let l = 0, r = m - 1
  while (l < n && r >= 0) {
    if (matrix[l][r] > target) r--
    else if (matrix[l][r] < target) l++
    else return true
  }
  return false
};