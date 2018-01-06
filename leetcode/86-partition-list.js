/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head.val) return null
  var cur = new ListNode(0)
  cur.next = head
  var arr = []
  var pre = null

  while(cur.next !== null){
    pre = cur.next

    if (pre.val > x) {
      arr.push(pre)
    }else{
      arr.unshift(pre)
    }
  }

  var res = arr[0]
  for (var i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1] ? arr[i + 1] : null
  }

  return res
};