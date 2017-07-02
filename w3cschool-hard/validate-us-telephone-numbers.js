/*
* 目标：判断电话号码
* 解释：如果传入字符串是一个有效的美国电话号码，则返回 true
* 例如：telephoneCheck("555-555-5555") 应该返回一个布尔值
* 思路：^1?   开头为1(0-1)次，
       [\s]? 空格(0-1)次
       (\d{3}) 满足(3)个数字
       ((a)|(b)) 满足a或者b，那么((\(\d{3}\))|(\d{3}[-]*))满足(555)或者555-
* */

function telephoneCheck(str) {
  if (typeof str !== 'string') return 

  return /^1?[\s]?((\(\d{3}\))|(\d{3}[-]*))[\s]?(\d{3})[-\s]*(\d{4})$/.test(str)
}

telephoneCheck("555-555-5555");