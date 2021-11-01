/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let len = nums.length

  for (let i = 0; i < nums.length; i++) {
    len ^= i ^ nums[i]
  }

  return len
};