/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = nums.length * (nums.length + 1) / 2

  for (const num of nums) {
    sum -= num
  }

  return sum
};