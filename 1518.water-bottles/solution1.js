/**
 * 模拟法
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let ant = numBottles

  while (numBottles >= numExchange) {
    let n =  parseInt(numBottles / numExchange), m = numBottles % numExchange
    ant += n
    numBottles = n + m
  }

  return ant
};