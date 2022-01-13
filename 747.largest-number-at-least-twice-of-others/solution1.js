/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) return 0

  let first = 0, second = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[first]) {
      second = first
      first = i
    } else if (nums[i] > nums[second]) {
      second = i
    }
  }


  return nums[second] * 2 > nums[first] ? -1 : first
};