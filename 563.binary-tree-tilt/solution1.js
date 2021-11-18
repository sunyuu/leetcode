/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let ret = 0
  var dfs = (node) => {
    if (!node) return 0
    let sumLeft = dfs(node.left)
    let sumRight = dfs(node.right)
    ret += Math.abs(sumLeft - sumRight)
    return sumLeft + sumRight + node.val
  }
  dfs(root)
  return ret
};