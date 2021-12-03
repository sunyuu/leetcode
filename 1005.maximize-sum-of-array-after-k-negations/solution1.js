/**
 * 使用排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
    sum += nums[i]
  }

  if (k > 0 && k % 2 == 1) {
    sum -= 2 * nums[nums.length - 1]
  }

  return sum
};