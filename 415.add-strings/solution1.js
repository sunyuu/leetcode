/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  
  let maxLen = Math.max(num1.length, num2.length)
  let flag = 0
  let sum = ""

  for (let i = 0; i < maxLen; i++) {
    let n1 = num1.length - i - 1 >= 0 ? num1[num1.length - i - 1] : 0
    let n2 = num2.length - i - 1 >= 0 ? num2[num2.length - i - 1] : 0

    let tempsum = flag + parseInt(n1) + parseInt(n2)

    sum = (tempsum % 10).toString() + sum

    flag = parseInt(tempsum / 10)
  }

  if (flag > 0) {
    sum = flag.toString() + sum
  }

  return sum
};