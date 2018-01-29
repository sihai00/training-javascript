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
  var dummyHead = new ListNode(0)
  var res = dummyHead
  var add = 0

  while(l1 !== null || l2 !== null){
    var x = l1 !== null ? l1.val : 0
    var y = l2 !== null ? l2.val : 0
    var sum = x + y + add
    add = ~~(sum / 10)
    res = res.next = new ListNode(sum % 10)
    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  // 边界限制，若最后一次进位，则加1
  if (add > 0) {
    res.next = new ListNode(add);
  }  
  // 去掉第一次0
  return dummyHead.next
};