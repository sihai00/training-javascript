/*
* 目标：字符串截取
* 解释：如果字符串的长度比指定的参数num长，则把多余的部分用...来表示;
*      num.length > num > 3, ...计入字符串长度；
*      num < 3, ...不计入字符串长度
*      num > num.length, 返回本身
*
* 例如：truncate("A-tisket a-tasket A green and yellow basket", 11) 应该返回 "A-tisket..."
*      truncate("A-", 1) 应该返回 "A..." 
* 
* */
function truncate(str, num) {
  if (typeof str !== 'string' && typeof num !== 'number') return
  var limit = num > 3 ? 3 : 0

  if (num < str.length) {
    return str.substr(0, num - limit) + '...'
  }else{
    return str
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);