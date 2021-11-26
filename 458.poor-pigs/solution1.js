/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let k = minutesToTest / minutesToDie
  return Math.ceil(Math.log(buckets) / Math.log(k + 1))
};