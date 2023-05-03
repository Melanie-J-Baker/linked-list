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
    const contains = (value) => {
        let current = head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    // find(value) returns the index of the node containing value, or null if not found.
    const find = (value) => {
        let index = 0;
        let current = head;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++
        }
        return null;
    }

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString = () => {
        let current = head;
        let string = "";
        while (current !== null) {
            string += `${current.value}  -->  `;
            current = current.nextNode;
        }
        return `${string}null`;
    }

    // insertAt(value, index) inserts a new node with the provided value at the given index.
    const insertAt = (value, index) => {
        if (index === 0) {
            prepend(value);
            return;
        }
        const prev = at(index - 1);
        const newNode = Node(value, prev.nextNode);
        prev.nextNode = newNode;
        size++;
    }

    // removeAt(index) removes node at given index.
    const removeAt = (index) => {
        if (index === 0) {
            head = head.nextNode;
            return;
        }
        const prev = at(index - 1);
        prev.nextNode = prev.nextNode.nextNode;
        size--;
    }

    return {
        append,
        prepend,
        get size(){ return size; },
        get head(){ return head; },
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

