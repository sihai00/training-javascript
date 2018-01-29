/**
 * 题意：给定二维数组，模拟数独，一维数组代表第一行。依次检查每行，每列，每个子九宫格是否出现重复元素
 * 思路：
      1.比较行
      2.比较列
      3.比较单个九宫格
 * @param {character[][]} board
 * @return {boolean}
 */
function check(array) {
  var hash = [];
  for (var i = 0, len = array.length; i < len; i++) {
    if (hash[array[i]]) return false;
    hash[array[i]] = true;
  }

  return true;
}

var isValidSudoku = function(board) {
  // every row
  for (var i = 0; i < 9; i++) {
    var tmp = [];
    for (var j = 0; j < 9; j++)
      if (board[i][j] !== '.')
        tmp.push(Number(board[i][j]));

    var f = check(tmp);
    if (!f)
      return f;
  }

  // every column
  for (var i = 0; i < 9; i++) {
    var tmp = [];
    for (var j = 0; j < 9; j++)
      if (board[j][i] !== '.')
        tmp.push(Number(board[j][i]));

    var f = check(tmp);
     if (!f)
      return f;
  }

  // 9 squares
  // 前两个for定位单个9宫格，后两个for定位9宫格中的格子
  for (var i = 0; i <= 6; i += 3){
    for (var j = 0; j <= 6; j += 3) {
      var tmp = [];
      for (var _i = i; _i < i + 3; _i++){
        for (var _j = j; _j < j + 3; _j++){
          if (board[_i][_j] !== '.'){
            tmp.push(Number(board[_i][_j]));
          }
        }
      }
      var f = check(tmp);
      if (!f)
        return f;
    }
  }
  return true;
};