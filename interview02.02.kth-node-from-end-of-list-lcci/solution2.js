/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */

var kthToLast = function(head, k) {
  
  let size = 0 

  let reserveLink = function(head, k)  {

    if (head === null) {
      return 0
    }

    let val = reserveLink(head.next, k)

    size++

    if (size > k) {
      return val
    } else {
      return head.val
    }
  }

  return reserveLink(head, k)

};