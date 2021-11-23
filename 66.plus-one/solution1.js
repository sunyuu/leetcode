/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let flag = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    let a = i === digits.length - 1 ? 1 : 0
    if (digits[i] + a + flag >= 10) {
      digits[i] = (digits[i] + a + flag) % 10
      flag = 1
    } else {
      digits[i] = (digits[i] + a + flag)
      flag = 0
    }
  }
  if (flag === 1) {
    digits.unshift(1)
  }
  return digits
};