/*
* 目标：日期改写
* 解释：把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式
* 例如：makeFriendlyDates(["2016-07-01", "2016-07-04"]) 应该返回 ["July 1st","4th"]
       makeFriendlyDates(["2016-07-01", "2018-07-04"]) 应该返回 ["July 1st, 2016", "July 4th, 2018"].
* */

// 日期转化
function daySuffix(str){
  if (typeof str !== 'string') return
  var pra = str[0] === '0' ? str.substr(-1) : str 
  var res = ''

  switch(pra){
    case '21' || '22' || '23':
      res = pra + 'th'
      break
    case '1':
      res = pra + 'st'
      break
    case '2':
      res = pra + 'nd'
      break
    case '3':
      res = pra + 'rd'
      break
    default:
      res = pra + 'th'
  }
  return res
}

// 月份转化
function monthSuffix(str){
  if (typeof str !== 'string') return
  console.log(str, 'monthSuffix')
  var rule = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobe', 'November', 'December']
  var pra = str[0] === '0' ? str.substr(-1) : str

  return rule[pra]
}

function makeFriendlyDates(arr) {
  if (!Array.isArray(arr)) return

  var arr0 = arr[0].split('-')
  var arr1 = arr[1].split('-')
  var diff = (new Date(arr[1]).getTime() - new Date(arr[0]).getTime())/1000
  let year = Math.floor(diff/3600/24/30/12);
  let month = Math.floor(diff/3600/24/30);

  if (arr[0] === arr[1]) {
    return [`${monthSuffix(arr0[1])} ${daySuffix(arr0[2])}, ${arr0[0]}`]
  }else{
    return [
      `${monthSuffix(arr0[1])} ${daySuffix(arr0[2])}${year !== 0 || (arr0[0] === arr1[0] && arr0[1] !== arr1[1])? ', ' + arr0[0] : ''}`, 
      `${arr0[1] === arr1[1] && year === 0 ? '' : monthSuffix(arr1[1]) + ' '}${daySuffix(arr1[2])}${year === 0 || arr0[2] - arr1[2] === 1 ? '' : ', ' + arr1[0]}`
    ]
  }
}

makeFriendlyDates(['2016-07-01', '2016-07-04'])
