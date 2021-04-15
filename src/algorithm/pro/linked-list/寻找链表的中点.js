function findCenter (head) {
    let res
    let slowNode = head
    let fastNode = head
    while (fastNode && fastNode.next) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    }
    if (fastNode) {
        slower = slower.next
    }
    return slowNode
}