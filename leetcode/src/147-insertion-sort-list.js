/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 为一个链表进行插入排序
 * @param {ListNode} head
 * @return {ListNode}
 */

var insertionSortList = function(head) {
  var cur = new ListNode(0), curIndex = cur
  cur.next = head

  while(cur.next && cur.next.next){
    let current = cur.next //前节点
    let next = current.next //后节点

    // 如果前节点比后节点小，则满足题意
    if (current.val <= next.val) {
      cur = cur.next
    }else{
      // 前节点比后节点大，先把前节点的下一个节点指向后节点的下一个
      current.next = next.next
      let headIndex = curIndex
      // 把后节点依次与从前的节点一一比较
      while(headIndex.next.val < next.val){
        headIndex = headIndex.next
      }
      // 如果某个节点比后节点大，那么交换即可
      next.next = headIndex.next
      headIndex.next = next
    }
  }

  return curIndex.next
};
