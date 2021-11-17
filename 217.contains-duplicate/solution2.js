/**
 * hash算法中的取余法
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash = []

  for (let n of nums) {
    let mod = n % nums.length

    if (mod < 0) {
      mod += nums.length
    }

    while(true) {
      if (hash[mod] === undefined) {
        hash[mod] = n
        break
      } else if (hash[mod] === n) {
        return true
      } else {
        mod++
        mod = mod % nums.length
        continue
      }
    }

  }
  return false
};