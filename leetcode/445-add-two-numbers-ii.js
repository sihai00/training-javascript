/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给出两个非空链表，表示两个非负整数。其中每一个整数的各位数组以顺数存储，返回这两个整数相加所代表的链表
 * 思路：反转两个链表，从个位数开始加，最后再重组成链表反转返回
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let a = [], b = []

  while(l1){
    a.push(l1.val)
    l1 = l1.next
  }
  while(l2){
    b.push(l2.val)
    l2 = l2.next
  }

  let ans = []
  let add = 0

  while(a.length || b.length){
    let c = a.length ? a.pop() : 0
    let d = b.length ? b.pop() : 0

    let sum = c + d + add;

    ans.push(sum % 10)
    add = ~~(sum / 10)
  }

  add && ans.push(add)

  ans.reverse()

  let res = []

  for (let i = 0; i < ans.length; i++) {
    res[i] = new ListNode(ans[i])
  }

  for (let i = 0; i < res.length - 1; i++) {
    res[i].next = res[i + 1]
  }

  return res[0]
};