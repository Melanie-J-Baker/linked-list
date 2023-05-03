import Node from "../linked-list/Node";

// LinkedList class / factory - represent the full list.

export const LinkedList = () => {
    let head = null;
    let size = 0;

    // append(value) adds a new node containing value to the end of the list
    const append = (value) => {
        const newNode = Node(value);
        if (head === null) {
            head = newNode;
        } else {
            let tmp = head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = newNode;
        }
        size++;
    }

    // prepend(value) adds a new node containing value to the start of the list
    const prepend = (value) => {
        const newNode = Node(value, head);
        head = newNode;
        size++
    }

    // tail returns the last node in the list
    const tail = () => {
        let tailNode = head;
        if (tailNode) {
            while (tailNode.nextNode) {
                tailNode = tailNode.nextNode;
            }
        }
        return tailNode;
    }
    // at(index) returns the node at the given index
    const at = (index) => {
        let currentIndex = 0;
        let currentNode = head;
        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return currentNode;
    }

    // pop removes the last element from the list
    const pop = () => {
        let current = head;
        let next = head.nextNode;
        while (next.nextNode !== null) {
            current = current.nextNode;
            next = next.nextNode;
        }
        const popped = next;
        current.nextNode = null;
        size--;
        return popped;
    }
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    // find(value) returns the index of the node containing value, or null if not found.
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    return {
        append,
        prepend,
        get size(){ return size; },
        get head(){ return head; },
        tail,
        at,
        pop
    }
}

