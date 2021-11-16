/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
 var isRectangleCover = function(rectangles) {
  let largeRect = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE]
  let sumArea = 0

  let hash = new Set()

  for (let i = 0; i < rectangles.length; i++) {
    largeRect = [Math.min(rectangles[i][0], largeRect[0]), Math.min(rectangles[i][1], largeRect[1]), Math.max(rectangles[i][2], largeRect[2]),  Math.max(rectangles[i][3], largeRect[3])]

    sumArea += (rectangles[i][2] -  rectangles[i][0]) * (rectangles[i][3] - rectangles[i][1])

    let lb = rectangles[i][0] + ',' + rectangles[i][1]
    let rt = rectangles[i][2] + ',' +  rectangles[i][3]
    let lt = rectangles[i][0] + ',' + rectangles[i][3]
    let rb = rectangles[i][2] + ',' + rectangles[i][1]
    
    if (hash.has(lb)) {
      hash.delete(lb)
    } else {
      hash.add(lb, 1)
    }

    if (hash.has(rt)) {
      hash.delete(rt)
    } else {
      hash.add(rt, 1)
    }

    if (hash.has(lt)) {
      hash.delete(lt)
    } else {
      hash.add(lt, 1)
    }

    if (hash.has(rb)) {
      hash.delete(rb)
    } else {
      hash.add(rb, 1)
    }
  }

  if (hash.size === 4 && sumArea === (largeRect[2] - largeRect[0]) * (largeRect[3] - largeRect[1]) && hash.has(largeRect[0] + ',' + largeRect[1]) && hash.has(largeRect[2] + ',' + largeRect[3]) && hash.has(largeRect[2] + ',' + largeRect[1]) && hash.has(largeRect[0] + ',' + largeRect[3])) {
    return true
  }

  return false
};