class ListNode {
    constructor(value, prevNode = null, nextNode = null) {
        this.value = value;
        this.prevNode = prevNode;
        this.nextNode = nextNode;
    }
}

class TwoWayList {
    constructor(headNode = null, tailNode = null) {
        this.headNode = headNode;
        this.tailNode = tailNode;
    }
    count = 0;
    listLength() {
        return this.count;
    }
    addHead(value) {
        let item = new ListNode(value);
        item.nextNode = this.headNode;
        if (this.headNode != null) {
            this.headNode.prevNode = item;
        }
        if (this.count === 0) {
            this.headNode = this.tailNode = item;
        } else {
            this.headNode = item;
        }
        this.count++;
    }
    addTail(value) {
        let item = new ListNode(value);
        item.prevNode = this.tailNode;
        if (this.tailNode != null) {
            this.tailNode.nextNode = item;
        }
        if (this.count === 0) {
            this.tailNode = this.headNode = item;
        } else {
            this.tailNode = item;
        }
        this.count++;
    }
    getElem(position) {
        let item = this.headNode;
        if (position < 1 || position > this.count) return alert('Ошибка! Неверный индекс');
        let currItem = 1;
        while (currItem < position) {
            item = item.nextNode;
            currItem++;
        }
        return item;
    }
    changeElem(position, newValue) {
        this.getElem(position).value = newValue;
    }
    removeElem(position) {
        let item = this.getElem(position);
        let prevItem = item.prevNode;
        let nextItem = item.nextNode;
        if (prevItem != null && nextItem != null && this.count != 1) {
            prevItem.nextNode = nextItem;
            nextItem.prevNode = prevItem;
        }
        if (position === 1) {
            this.headNode = nextItem;
        }
        if (position === this.count) {
            this.tailNode = prevItem;
        }
        this.count--;
    }
    insertElem(position, value) {
        if (position === 1) {
            this.addHead(value);
            return;
        }
        if (position === this.count + 1) {
            this.addTail(value);
            return;
        }
        let item = this.getElem(position - 1);
        let nextItem = item.nextNode;
        let newNode = new ListNode(value, item, nextItem);
        item.nextNode = newNode;
        nextItem.prevNode = newNode;
        this.count++;
    }
}

let abc = new TwoWayList();
for (let i = 1; i <= 100; i++) {
    abc.addTail(i);
}
console.log(abc);