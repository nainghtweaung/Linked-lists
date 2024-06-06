class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    this.size++;
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = newNode;
  }

  prepend(value) {
    this.size++;
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    return this.size;
  }

  tail() {
    if (this.head.nextNode === null) {
      return this.head;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let currentIndex = 0;

    let tmp = this.head;
    while (currentIndex !== index && tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      currentIndex++;
    }
    return tmp;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    if (this.head.nextNode === null) {
      head = null;
      this.size--;
      return;
    }

    let tmp = this.head;
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = null;
    this.size--;
  }

  contains(value) {
    if (this.head === null) {
      return false;
    }

    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.head === null) {
      return null;
    }

    let index = 0;
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return index;
      }
      index++;
      tmp = tmp.nextNode;
    }

    return null;
  }

  toString() {
    let string = '';

    if (this.head === null) {
      return null;
    }

    let tmp = this.head;
    while (tmp !== null) {
      string = string + `( ${tmp.value} ) => `;
      tmp = tmp.nextNode;
    }

    string = string + 'null';
    return string;
  }

  insertAt(value, index) {
    let currentIndex = 0;

    if (this.head === null) {
      return;
    }

    const newNode = new Node();
    newNode.value = value;

    let tmp = this.head;
    let targetNode;
    while (tmp !== null && currentIndex !== index) {
      targetNode = tmp;
      tmp = tmp.nextNode;
      currentIndex++;
    }

    targetNode.nextNode = newNode;
    newNode.nextNode = tmp;
  }

  removeAt(index) {
    if (this.head === null) {
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentIndex = 0;

    let tmp = this.head;
    let prevNode;
    while (tmp !== null && currentIndex !== index) {
      prevNode = tmp;
      tmp = tmp.nextNode;
      currentIndex++;
    }

    prevNode.nextNode = tmp.nextNode;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('c');
linkedList.append('d');
linkedList.insertAt('b', 3);
linkedList.removeAt(3);

console.log(linkedList);
console.log(linkedList.toString());
