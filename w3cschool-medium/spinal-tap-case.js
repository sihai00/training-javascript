/*
* 目标：字符串连接
* 解释：将字符串转换为all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
* 例如：spinalCase("This Is Spinal Tap") 应该返回 "this-is-spinal-tap"
       spinalCase("thisIsSpinalTap") 应该返回 "this-is-spinal-tap"
* 
* */

function spinalCase(str) {
  if (typeof str !== 'string') return 

  return str.replace(/[_\s]*([A-Z]*[a-z\-]+)/g, (math, $1, index) => {
    return `-${$1.toLowerCase()}`
  }).substring(1)
}

spinalCase('thisIsSpinalTap');