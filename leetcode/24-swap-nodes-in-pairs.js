/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 题意：给定一个链表，调换每两个相邻节点，并返回其头部，例如给定 1->2->3->4， 你应该返回的链表是 2->1->4->3
 * 思路：转化为数组，两两交换，再依次链接
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null

  var arr = []
  while(head){
    var next = head.next
    head.next = null
    arr.push(head)
    head = next
  }

  var len = arr.length
  for (var i = 0; i < len; i += 2) {
    var a = arr[i]
    var b = arr[i + 1]

    if (!b) {
      continue
    }

    arr[i + 1] = a
    arr[i] = b
  }

  for (var j = 0; j < len - 1; j++) {
    arr[j].next = arr[j + 1]
  }

  return arr[0]
};
