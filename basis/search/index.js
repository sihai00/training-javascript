var common = require('../common')
var binary = require('./binary')
var tree = require('./tree')
var union = require('./union')

// 随机数组
// var param = common.randomNumber(6, 10, 100)
// var res = binary.ceil([1,3,5,7,9], 6)

// var mytree = tree.insert([10,5,15,2,8,12,17,1,3,7,9,11,13,16,18])
// var res = tree.ceil(mytree, 8)
// console.dir(res, {depth: null})

var count = 10
var data = union.UF2(count)
// var res = union.unionElements(data, 1, 2)
union.text(data)
// console.log(res, 'res')