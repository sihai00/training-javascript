/*
* 目标：收银系统
* 解释：设计一个收银程序 checkCashRegister()，其把购买价格(price)作为第一个参数, 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数，cid 是一个二维数组，存着当前可用的找零.
* 例如：checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 应该返回一个数组
  思路：1.格式化cid，从面值大到小，例如100-20-10-5-0.25-0.1-0.05-0.01方便运算
       2.比较找零和零钱，从大到小。如果面值比找零大，跳过，如果找零等于零钱，那么close，否则找零依次和零钱相减
       3.最后判断如果剩余找零，那么Insufficient Funds，否则输出所负零钱
* */

function checkCashRegister(price, cash, cid) {
  var sign = [
    {id: 1, name: 'PENNY', value: 0.01},
    {id: 2, name: 'NICKEL', value: 0.05},
    {id: 3, name: 'DIME', value: 0.1},
    {id: 4, name: 'QUARTER', value: 0.25},
    {id: 5, name: 'ONE', value: 1},
    {id: 6, name: 'FIVE', value: 5},
    {id: 7, name: 'TEN', value: 10},
    {id: 8, name: 'TWENTY', value: 20},
    {id: 9, name: 'ONE HUNDRED', value: 100},
  ]
  var price = Number(cash - price)
  var lave = []
  var result = []

  // 格式化cid
  sign.forEach(v => {
    price > v.value && lave.unshift(cid.find(k => k[0] === v.name))
  })

  for(var v of lave){
    // console.log(price, v[1], (price - v[1]).toFixed(2), 'price')
    var trading = sign.find(k => k.name === v[0])

    if (price > v[1] && v[1] !== 0) {
      price = (price - v[1]).toFixed(2)
      result.push(v)
    }else if(price < v[1]){
      if (price < trading.value) {
        continue
      }else{
        var i = 0
        while(price >= 0){
          i += 1
          price = (price - trading.value).toFixed(2)
        }
        price = (+price + trading.value).toFixed(2)
        result.push([v[0], trading.value * (i - 1)])
      }
    }else if(price === v[1]){
      return 'Closed'
    }
  }

  if (price > 0) {
    return 'Insufficient Funds'
  }else{
    return result;
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
