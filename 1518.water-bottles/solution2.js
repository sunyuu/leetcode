/**
 * 数学法
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  return numBottles + parseInt((numBottles - 1) / (numExchange - 1))
};