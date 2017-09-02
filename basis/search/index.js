var common = require('../common')
var binary = require('./binary')
var tree = require('./tree')

// 随机数组
// var param = common.randomNumber(6, 10, 100)
// var res = binary.ceil([1,3,5,7,9], 6)

var mytree = tree.insert([3,2,4,1,5,6])
// var res = tree.search(mytree, 3)
var res = tree.preOther(mytree)
console.dir(mytree, {depth: null})