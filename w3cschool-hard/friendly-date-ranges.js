/*
* 目标：日期改写
* 解释：把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式
* 例如：makeFriendlyDates(["2016-07-01", "2016-07-04"]) 应该返回 ["July 1st","4th"]
       makeFriendlyDates(["2016-07-01", "2018-07-04"]) 应该返回 ["July 1st, 2016", "July 4th, 2018"].
* */

// 日期转化
function daySuffix(str){
  if (typeof str !== 'string') return

  switch(str){
    case str === '21' || str === '22' || str === '23':
      return str + 'th'
    case str.substr(-1) === '1'
      return str + 'st'
    case str.substr(-1) === '2'
      return str + 'nd'
    case str.substr(-1) === '3'
      return str + 'rd'
    default
      return str + 'th'
  }
}

// 月份转化
function monthSuffix(str){
  if (typeof str !== 'string') return

  var rule = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobe', 'November', 'December']
  return rule[str]
}

function makeFriendlyDates(arr) {
  if (!Array.isArray(arr)) return

  var arr0 = arr[0].split('-')
  var arr1 = arr[1].split('-')

  return [``]

  if (arr0[0] === arr1[0]) {
    return [`${monthSuffix(arr0[1])} ${daySuffix(arr0[2])}`, `${arr0[1] === arr1[1] && monthSuffix(arr0[1])} ${daySuffix(arr0[2])}`]
  }else{
    
  }

  return arr
}

makeFriendlyDates(['2016-07-01', '2016-07-04'])
