/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个单链表，删除从表尾开始数的第n个数字，并返回删除后的链表
 * 先调整出双指针相间隔n+1个节点，然后遍历当后指针等于null时，前指针为删除节点的前一个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  var cur = new ListNode(0), curIndex = cur
  cur.next = head

  var node1 = cur, node2 = cur

  // 计算双指针间距
  for (var i = 0; i < n + 1; i++) {
    node2 = node2.next
  }

  // 循环到最后
  while(node2){
    node1 = node1.next
    node2 = node2.next
  }

  // 前指针为删除节点的前一个节点
  node1.next = node1.next.next
  return curIndex.next
};

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


