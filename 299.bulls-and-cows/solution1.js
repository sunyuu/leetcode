/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
  let bull = 0, cow = 0
  let c1 = new Array(10).fill(0), c2 = new Array(10).fill(0)
  for (let i = 0; i < secret.length; i++) {
    let a = secret[i].charCodeAt() - '0'.charCodeAt(), b = guess[i].charCodeAt() - '0'.charCodeAt()
    if (a == b) {
      bull++
    } else {
      c1[a]++
      c2[b]++
    }
  }

  for (let i = 0; i < 10; i++) {
    cow += Math.min(c1[i], c2[i])
  }

  return bull + 'A' + cow + 'B'
};