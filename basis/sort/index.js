var common = require('../common')
var selectSort = require('./selectSort')
var insertSort = require('./insertSort')
var mergeSort = require('./mergeSort')

// 随机数
var param = common.randomNumber(10000, 10, 10000)

// 执行
var res1 = common.runFunTime('selectSort', selectSort, [param])
var res2 = common.runFunTime('insertSort', insertSort, [param])
var res3 = common.runFunTime('mergeSort', mergeSort, [param])

// 验证
common.isSort(res1, false)
common.isSort(res2, false)
common.isSort(res3, false)
