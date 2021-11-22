/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.original = nums.slice()
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = this.original.slice()
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = 0; i < this.nums.length; i++) {
    let j = Math.floor(Math.random() * (this.nums.length - i)) + i
    let temp = this.nums[j]
    this.nums[j] = this.nums[i]
    this.nums[i] = temp
  }
  return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */