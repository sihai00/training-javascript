/*
* 目标：位移密码
* 解释：移位密码也就是密码中的字母会按照指定的数量来做移位
* 例如：一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔'O'，以此类推
* 
* */

function rot13(str) {
  var letter = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  return str.split('').map(v => {
    if (/\w/.test(v)) {
      var index = letter.findIndex(k => k === v) + 13
      index = index >= 26 ? index - 26 : index

      return letter[index]
    }else{
      return v
    }
  }).join('')
}

rot13("SERR PBQR PNZC");