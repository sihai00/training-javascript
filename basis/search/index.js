var common = require('../common')
var binary = require('./binary')
var tree = require('./tree')

// 随机数组
// var param = common.randomNumber(6, 10, 100)
// var res = binary.ceil([1,3,5,7,9], 6)

var res = tree.insert([1,2,3,4,5,6])
console.dir(res, {depth: null})