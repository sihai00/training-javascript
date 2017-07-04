/*
* 目标：收银系统
* 解释：设计一个收银程序 checkCashRegister()，其把购买价格(price)作为第一个参数, 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数，cid 是一个二维数组，存着当前可用的找零.
* 例如：checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 应该返回一个数组
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
  console.log(lave, 'lave')
  for(var v of lave){
    console.log(price, v[1], (price - v[1]).toFixed(2), 'price')
    
    if (price > v[1]) {
      console.log(1)
      price = (price - v[1]).toFixed(2)
      result.unshift(v)
    }else if(price < v[1]){
      console.log(2)
      result.unshift([v[0], price])
      if (Number.isInteger(v[1] - price)) {
        price = 0
        break
      }else{
        price = (price - v[1]).toFixed(2)
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
