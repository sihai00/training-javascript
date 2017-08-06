/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var arr = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]
  ]
  // 格式化num为4位数
  var prama = ('000' + num).substr(-4).toString().split('')
  var thousand = prama[0]
  var hundred = prama[1]
  var ten = prama[2]
  var one = prama[3]

  return arr[3][thousand] + arr[2][hundred] + arr[1][ten] + arr[0][one]
};