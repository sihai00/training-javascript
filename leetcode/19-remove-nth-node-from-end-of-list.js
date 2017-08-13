/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个单链表，删除从表尾开始数的第n个数字，并返回删除后的链表
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var arr = []

  while(head){
    arr.push(new ListNode(head.val))
    head = head.next
  }

  arr.splice(-n, 1)

  for (var i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr.length === 0 ? [] : arr[0]
};