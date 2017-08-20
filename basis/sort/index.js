var common = require('../common')
var selectSort = require('./selectSort')
var insertSort = require('./insertSort')

// 随机数
var param = common.randomNumber(10, 10, 100)

// 执行
var res1 = common.runFunTime('selectSort', selectSort, [param])
var res2 = common.runFunTime('insertSort', insertSort, [param])
common.isSort(res1, true)
common.isSort(res2, true)
