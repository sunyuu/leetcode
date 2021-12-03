/**
 * 不使用排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  let temp = new Array(201).fill(0)

  for (let i = 0; i < nums.length; i++) {
    temp[100 + nums[i]]++
  }

  let i = 0

  while (k > 0) {
    while(temp[i] === 0) i++

    temp[i]--
    temp[200 - i]++

    if (i > 100) {
      i = 200 - i
    }
    k--
  }

  let sum = 0

  for (let j = i; j < temp.length; j++) {
    sum += (j - 100) * temp[j]
  }

  return sum
};