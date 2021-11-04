/**
 * @param {number[][]} heightMap
 * @return {number}
 */
 var trapRainWater = function(heightMap) {
  let m = heightMap.length, n = heightMap[0].length
  let maxHeight = 0
  let dir = [-1, 0, 1, 0, -1]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      maxHeight = Math.max(maxHeight, heightMap[i][j])
    }
  }
  let water = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      water[i][j] = maxHeight
    }
  }

  console.log(water)

  let qu = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (water[i][j] > heightMap[i][j]) {
          water[i][j] = heightMap[i][j]
          qu.push([i, j])
        }
      }
    }
  }

  while (qu.length) {
    let curr = qu.shift()
    let x = curr[0], y = curr[1] 

    for (let i = 0; i < 4; i++) {
      let mx = x + dir[i], ny = y + dir[i + 1]

      if (mx < 0 || mx >= m || ny < 0 || ny >= n) {
        continue
      }

      if (water[x][y] < water[mx][ny] && water[mx][ny] > heightMap[mx][ny]) {
        water[mx][ny] = Math.max(water[x][y], heightMap[mx][ny])
        qu.push([mx, ny])
      }

    }

  }

  let ret = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        ret += water[i][j] - heightMap[i][j]
    }
  }

  return ret
};