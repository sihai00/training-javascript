/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var a = l1
  var b = l2
  var dummyHead = new ListNode(0)
  var res = dummyHead
  var add = 0

  while(a !== null || b !== null){
    var x = a !== null ? a.val : 0
    var y = b !== null ? b.val : 0
    var sum = x + y + add
    add = Math.floor(sum / 10)
    res.next = new ListNode(sum % 10)
    res = res.next
    if (a !== null) a = a.next
    if (b !== null) b = b.next
  }
  // 边界限制，若最后一次进位，则加1
  if (add > 0) {
    res.next = new ListNode(add);
  }  
  // 去掉第一次0
  return dummyHead.next
};