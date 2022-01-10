/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  const add = (a, b) => {
    let n1 = a.length - 1, n2 = b.length - 1, carray = 0
    let ans = ''

    while (n1 >= 0 || n2 >= 0 || carray > 0) {
      let t1 = n1 >= 0 ? parseInt(a[n1--]) : 0
      let t2 = n2 >= 0 ? parseInt(b[n2--]) : 0

      ans = (t1 + t2 + carray) % 10 + ans

      carray = parseInt((t1 + t2 + carray) / 10)

    }

    return ans
  }

  const isValid = (num, a, b, c) => {
    if (num[a] == '0' && b != a + 1) return false
    if (num[b] == '0' && c != b + 1) return false

    let a1 = num.substring(a, b)
    let b1 = num.substring(b, c)

    let sum = add(a1, b1)

    if (sum.length + c > num.length) return false

    if (sum != num.substring(c, sum.length + c)) return false

    if (sum.length + c == num.length) return true

    return isValid(num, b, c, c + sum.length)
  }


  for (let i = 1; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (isValid(num, 0, i, j)) return true
    }
  }

  return false

};