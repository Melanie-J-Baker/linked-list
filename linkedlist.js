import Node from "../linked-list/Node";

// LinkedList class / factory - represent the full list.

const LinkedList = () => {
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
}
    // size returns the total number of nodes in the list
    // head returns the first node in the list
    // tail returns the last node in the list
    // at(index) returns the node at the given index
    // pop removes the last element from the list
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    // find(value) returns the index of the node containing value, or null if not found.
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
