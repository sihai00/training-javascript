/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个链表，按k值向右移动链表
 * 思路：用两个指针标示截断处
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
  if (!head || k <= 0) return head;
  
  var x = head;
  var y = head;
  for (var i = 0; i < k; i++) {
    y = y.next;

    // 处理当k值比链表长度长时
    if (!y) {
      k = k % (i + 1);
      i = -1;
      y = head;
    }
  }
  
  while (y.next) {
    x = x.next;
    y = y.next;
  }

  y.next = head;
  head = x.next;
  x.next = null;
  return head;
};

