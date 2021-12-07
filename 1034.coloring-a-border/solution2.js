/**
 * bfs 时间复杂赌 O(mn) 空间复杂度 O(mn)
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const n = grid.length, m = grid[0].length
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false))
  let borders = []

  let q = [[row, col]]

  while (q.length > 0) {
    let dot = q.pop()
    let x = dot[0], y = dot[1]
    visited[x][y] = true
    let isBorder = false
    for (let i = 0; i < 4; i++) {
      let nx = x + direction[i][0], ny = y + direction[i][1]

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || grid[x][y] != grid[nx][ny]) {
        isBorder = true
      } else if (!visited[nx][ny]) {
        q.push([nx, ny])
      }
    }


    if (isBorder) {
      borders.push([x, y])
    }

  }

  for (let i = 0; i < borders.length; i++) {
    grid[borders[i][0]][borders[i][1]] = color
  }

  return grid
};