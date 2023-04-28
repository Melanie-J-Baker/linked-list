// Node class/factory, containing value property and link to nextNode, set both as null by default.
export const Node = (value = null, nextNode = null) => {
    return {
      value,
      nextNode,
    }
}