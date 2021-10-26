/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let testArray = board
  // add row
  for (let i = 0; i < 9; i++) {
    let single = []
    for (let j = 0; j < 9; j++) {
      single.push(board[j][i])
    }
    testArray.push(single)
  }
  // add 3 x 3 
  let row = 0
  while (row < 8) {
    let colum = 0
    while (colum < 8) {
      let single = []
      for (let i = row; i < row + 3; i++) {
        for (let j = colum; j < colum + 3; j++) {
          single.push(board[j][i])
        }
      }
      testArray.push(single)
      colum += 3
    }
    
    row += 3
  }
  console.log(testArray.length)
  for (let i = 0; i < testArray.length; i++) {
    if (!validArray(testArray[i])) {
      return false
    }
  }
  return true
};

function validArray(arr) {
  let i = 0;
  let j = 0;
  while(i < arr.length) {
    if (arr[i] != '.') {
      j = i + 1
      while(j < arr.length) {
        if (arr[j] != '.') {
          if (arr[i] == arr[j]) {
            return false
          }
        }
        j++
      }
    }
    i++
  }
  console.log(arr)
  return true
}

let board = [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]

 console.log(isValidSudoku(board))