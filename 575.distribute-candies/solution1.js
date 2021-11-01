/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
  let temp = new Map()
  let type = 0
  for (let i = 0; i < candyType.length && type < candyType.length / 2; i++) {
    if (!temp.get(candyType[i])) {
      type++
      temp.set(candyType[i], 1)
    }
  }

  return type
};