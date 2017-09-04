var common = require('../common')
var binary = require('./binary')
var tree = require('./tree')

// 随机数组
// var param = common.randomNumber(6, 10, 100)
// var res = binary.ceil([1,3,5,7,9], 6)

var mytree = tree.insert([3,1,5,0,4,6,2])
// var res = tree.search(mytree, 6)
var res = tree.removeMax(mytree)
console.dir(res, {depth: null})