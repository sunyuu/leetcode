/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret ^= nums[i]
  }
  return ret
};