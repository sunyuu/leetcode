/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) => a - b)

  let res = Number.MAX_SAFE_INTEGER

  for (let i = 0, j = k - 1; j < nums.length; i++, j++) {
    res = Math.min(res, nums[j] - nums[i])
  }

  return res
};