/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let left = 0.0, right = 1.0

  while (true) {
    let mid = (left + right) / 2
    let count = 0, i = 0
    let x = 0, y = 1

    for (let j = 1; j < arr.length; j ++) {
      while (arr[i] / arr[j] < mid) {
        if (arr[i] * y > arr[j] * x) {
          x = arr[i]
          y = arr[j]
        }
        i++
      }
      count += i
    }

    if (k == count) {
      return [x, y]
    } else if (k > count) {
      left = mid
    } else {
      right = mid
    }

  }
};