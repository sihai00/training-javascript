/**
 * 题意：给出一个正整数n，寻找最少的完全平方数，使他们的和为n。
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var dp = []
  
  for (var i = 1; i <= n; i++)
    dp[i] = Infinity

  dp[0] = 0

  for (var i = 0; i <= n; i++) {
    for (var j = 1; ; j++) {
      if (i + j * j > n) break
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
    }
  }
  return dp[n]
}

function numSquares(n){
  if (n === 0) {
    return 0;
  }
  let res = [0];
  for (var i = 1; i <= n; i++) {
    res.push(100);
    for (var j = 1; j * j <= i; j++) {
      res[i] = Math.min(res[i - j * j] + 1, res[i]);
    }
  }
  return res[res.length - 1];
}