/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let tempScore = score.concat([]).sort((a , b) => b - a)

  let map = new Map()
  for (let i = 0; i < tempScore.length; i++) {
    map.set(tempScore[i], i)
  }

  let ans = []
  let medal = ['Gold Medal', 'Silver Medal', 'Bronze Medal']

  for (let i = 0; i < score.length; i++) {
    let rank = map.get(score[i])
    ans.push(rank < 3 ? medal[rank] : (rank + 1).toString() )
  }

  return ans
};