var MapSum = function() {
  this.prefix = new Map()
  this.keys = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  for (let i = 0; i < key.length; i++) {
    let str = key.slice(0, i + 1)
    this.prefix.set(str, (this.prefix.get(str) || 0) + val - (this.keys.get(key) || 0))
  }

  this.keys.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  return this.prefix.get(prefix) || 0
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// 普通方法