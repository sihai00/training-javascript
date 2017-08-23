var common = require('../common')
var selectSort = require('./selectSort')
var insertSort = require('./insertSort')
var mergeSort = require('./mergeSort')
var quickSort = require('./quickSort')
var bubbleSort = require('./bubbleSort')

// 随机数
var param = common.randomNumber(10, 10, 100)

// 执行
var res1 = common.runFunTime('selectSort', selectSort, [param])
var res2 = common.runFunTime('insertSort', insertSort, [param])
var res3 = common.runFunTime('mergeSort', mergeSort, [param])
var res4 = common.runFunTime('quickSort', quickSort, [param])
var res5 = common.runFunTime('bubbleSort', bubbleSort, [param])

// 验证
common.isSort(res1, false)
common.isSort(res2, false)
common.isSort(res3, false)
common.isSort(res4, false)
common.isSort(res5, false)
