class node {
  constructor(data, next=null); {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    console.log(`LL: ${data} inserted first`)
  }

  insertFisrt(data) {
    this.head = new node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    const newNode = new Node(data);
    let current;

    if (!this.head) {
      this.head = newNode;
      console.log(`LL: ${data} inserted first`)
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
      console.log(`LL: ${data} inserted first`)
    }
    this.size++;
  }

  insetAt(data, index) {
    if (index > 0 && index > this.size) {
      return false;
    } 

    if (index === 0) {
      this.insertFisrt(data);
      return true;
    }

    const NewNode = new Node(data);
    let curr, prev;

    curr = this.head;
    let count = 0;

    while (count < index) {
      prev = curr;
      count++;
      curr = curr.next;
    }
    NewNode.next = curr;
    prev.next = NewNode;
    console.log(`LL: new Node ${data} inserted in front of ${NewNode.next.data}`);
    this.size++;
  }
}

const LList = new linkedList();
LList.insertFisrt(11);
LList.insertFisrt(12);
LList.insertFisrt(13);
LList.insertFisrt(14);

LList.insertAt(15, 2);
LList.insertAt(16, 2);
