/*
  Assume we have a Node class:
*/
  class Node {
    constructor(next, value) {
      this.next = nextNode;
      this.value = value;
    }
  }
/*
  Assume we have a LinkedList class that takes in a node as a head, and has methods to add
*/

Node head = new Node(null, 0)

// Continue to add nodes to build to the linkedList, mapping the next to the next node

// SOLUTION:

removeElement = (k, head) {
  // Create a node, follow, that tails the head node by one
  Node follow = head;
  head = head.next;

  // Continue until head reaches value
  while (head.value !== k) {
    head = head.next;
    follow = follow.next;
  }

  // The follow next should be set to head next, so that head is skipped over
  follow.next = head.next;
}
