class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  enqueue(element, priority) {
    const qElement = new QueueElement(element, priority);
    let isEnqueued = false;

    for (let i = 0; i < this.items.count; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        isEnqueued = true;
        console.log(`pQueue[${i}]: ${element} enqueued in front of ${this.items[i+1].element}`);
        break;
      }
    }
    if (!isEnqueued) {
      this.itemes[this.count] = element;
      console.log(`queue[${this.count}]: ${element} enqueued`);
    }
      this.count++;
      return this.count-1;  
  }

  dequeue() {
    if (this.count === 0) return undefined;
    let toDequeue = this.items[0].element;
    this.count--;
    this.items.shift();
    console.log(`queue[0]: ${toDequeue} has dequeued`);
    return toDequeue;
  }

  front() {
    console.log(`queue[front]: ${this.items[0].element}`);
    return this.items[0];
  }

  isEmpty() {
     let result = this.count === 0;
     console.log(result);
     return result;
  }

  size() {
    console.log(`queue size: ${this.count}`);
    return this.count;
  }

  print() {
    let toPrint = this.items.toString();
    console.log(toPrint);
    return toPrint;
  }

  clear() {
    this.items.splice(0,this.items.length);
    this.count = 0;
    console.log('Reset Queue Complete');
    return this.items;
  }
}

const pQueue = new PriorityQueue();

pQueue.enqueue(1, 3);
pQueue.enqueue(2, 4);
pQueue.enqueue(3, 2);


