/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 写一个排序算法，用O(nlogn)的时间复杂度为一个链表进行排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head
  var p1 = head, p2 = head.next

  while(p2 && p2.next){
    p1 = p1.next
    p2 = p2.next.next
  }

  // 寻找中间值，分为两段递归分别求值
  p2 = sortList(p1.next)
  p1.next = null
  p1 = sortList(head)

  return merge(p1, p2)
};

function merge(h1, h2){
  var fakeHead = new ListNode(Number.MIN_VALUE), p = fakeHead

  while(h1 && h2){
    if (h1.val < h2.val) {
      p.next = h1
      h1 = h1.next
    }else{
      p.next = h2
      h2 = h2.next
    }

    p = p.next
  }

  p.next = h1 ? h1 : h2

  return fakeHead.next
}
