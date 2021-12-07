/**
 * dsf 时间复杂赌 O(mn) 空间复杂度 O(mn)
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const n = grid.length, m = grid[0].length
  let map = new Map()
  let borders = []

  let dfs = function(x, y) {
    let isborder = false
    map.set(x + ',' + y, 1)
    for (let i = 0; i < direction.length; i++) {
      let nx = x + direction[i][0], ny = y + direction[i][1]
      if (nx < 0 || nx >= n  || ny < 0 || ny >= m || grid[nx][ny] != grid[x][y]) {
        isborder = true
      } else if (!map.get(nx + ',' + ny)) {
        dfs(nx, ny)
      }
    }

    if (isborder) borders.push([x, y])
  }


  dfs(row, col)

  for (let i = 0; i < borders.length; i++) {
    grid[borders[i][0]][borders[i][1]] = color
  }

  return grid
};