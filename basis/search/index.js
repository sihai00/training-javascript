var common = require('../common')
var binary = require('./binary')

// 随机数组
var param = common.randomNumber(6, 10, 100)
var res = binary.ceil([1,3,5,7,9], 6)
console.log(res)