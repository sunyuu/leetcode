class PriorityQueue {

  constructor() {
    this._arr = new Array()

  }

  // 获取但不删除队首元素，也就是最小的元素
  peek() {
    if (this._arr.length === 0) {
      return null
    }
    return this._arr[0]
  }

  // 添加一个元素
  add(e) {
    if (e === null) {
      return false
    }

    this._siftUp(e)

    return true
  }

  // 获取并删除队首元素
  poll() {
    let result = this._arr[0]

    if (result !== undefined) {
      let n = this._arr.length - 1
      let e = this._arr.pop()

      if (n > 0) {
        this._siftDownComparable(0, e)
      }
    }

    return result
  }


  _siftUp(e) {
    this._siftUpComparable(e)
  }

  _siftUpComparable(e) {
    let k = this._arr.length

    while (k > 0) {
      let parent = (k - 1) >>> 1  // 获取父元素下标

      let es = this._arr[parent]

      if (e >= es) { // 如果插入元算比父元素大，则直接插入，否则与父元素交换当前插入位置的元素
        break
      }

      this._arr[k] = es

      k = parent
    }

    this._arr[k] = e
  }

  _siftDownComparable(k, e) {
    let n = this._arr.length - 1

    let half = n >>> 1

    while (k < half) {
      let child = (k << 1) + 1
      
      let c = this._arr[child]

      let right = child + 1 

      if (c > this._arr[right]) {
        child = right
        c = this._arr[right]
      }

      if (e <= c) {
        break
      }

      this._arr[k] = c
      k = child
    }

    this._arr[k] = e
  }

}

let pq = new PriorityQueue()

pq.add(5)
pq.add(8)
pq.add(2)
pq.add(10)
pq.add(1)
pq.add(4)

console.log(pq)
console.log(pq.poll())
console.log(pq)
