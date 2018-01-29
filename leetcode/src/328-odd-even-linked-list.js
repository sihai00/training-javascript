/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给出一个链表，将链表重新整理，使得所有索引为奇数的节点排在索引为偶数节点的前面
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  var left = new ListNode(0), right = new ListNode(0)
  var leftIndex = left, rightIndex = right, index = 0
  // 建立两个链表，奇数为left，偶数为right，最后合并
  while(head !== null){
    if (index % 2 === 0) {
      left.next = head
      left = head
    }else{
      right.next = head
      right = head
    }

    index += 1
    head = head.next
  }

  right.next = null
  left.next = rightIndex.next
  return leftIndex.next
};

// 其他思路：两个链表分别设置为一前一后
var oddEvenList = function(head) {
  if (!head) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let firstEven = even;
  
  while (odd && even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  
  odd.next = firstEven;
  return head;
};