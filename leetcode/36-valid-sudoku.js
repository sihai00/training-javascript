/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (board.length === 0) return false
  // row
  var sign1 = {}
  // col
  var sign2 = {}
  // sigle
  var sign3 = {}
  var len = board.length
  
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var res = board[i][j]

      if (res === '.') continue

      // row i/3*3+j/3
      if (!sign1[Math.floor(i/3)*3+Math.floor(j/3)]) sign1[Math.floor(i/3)*3+Math.floor(j/3)] = {}
      if (sign1[Math.floor(i/3)*3+Math.floor(j/3)][res]) {
        return false
      }else{
        sign1[Math.floor(i/3)*3+Math.floor(j/3)][res] = '!'
      }
      
      // col i%3*3+j%3
      if (!sign2[i%3*3+j%3]) sign2[i%3*3+j%3] = {}
      if (sign2[i%3*3+j%3][res]) {
        return false
      }else{
        sign2[i%3*3+j%3][res] = '!'
      }
      
      // sigle
      if (!sign3[i]) sign3[i] = {}
      if (sign3[i][res]) {
        return false
      }else{
        sign3[i][res] = '!'
      }
    }
  }

  return true
};