/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  nums = nums.sort((a, b) => a - b)

  let len = nums.length

  if (nums[0] !== 0) {
    return 0
  }

  if (nums[len - 1] != len) {
    return len
  }

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] > 1 ) {
      return nums[i] - 1
    }
  }
};