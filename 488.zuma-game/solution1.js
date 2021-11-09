/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
 var findMinStep = function(board, hand) {
  
  let visited = new Set()
  let ans = 100
  function dsf(board, hand, count) {
    if (board.length === 0) return ans = Math.min(ans, count)

    if (hand.length === 0 || visited.has(board + count)) return 

    visited.add(board + count)

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < hand.length; j++) {
        dsf(clear(board.substring(0, i) + hand[j] + board.substring(i)) ,hand.substring(0, j) + hand.substring(j + 1), count + 1)
      } 
    }
  }

  dsf(board, hand, 0)


  function clear(board) {
    for (let i = j = 0; j <= board.length; j++) {
      if (board[i] === board[j]) {
        continue
      }

      if ( j - i > 2) {
        board = board.substring(0, i) + board.substring(j)
        j = 0
      }

      i = j
    }

    return board
  }

  return ans === 100 ?  - 1 : ans
}