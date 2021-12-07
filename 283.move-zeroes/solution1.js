/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0, right = 0, n = nums.length

  while (right < n) {
    if (nums[right]) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }

  return nums
}; 