/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      temp.push([arr[i], arr[j]])
    }
  }

  temp.sort((a, b) => a[0] * b[1] - b[0] * a[1])

  return temp[k - 1]
};