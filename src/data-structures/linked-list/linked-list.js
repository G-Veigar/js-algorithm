// import Node from './node.js'

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        // 头指针 指向第一个节点
        this.head = null
        // 尾指针 指向最后一个节点
        this.tail = null
        // 链表的长度
        this.length = 0
    }

    // 向列表末尾新增节点
    append(data) {
        let newNode = new Node(data)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this.length
    }

    toString() {
        if(this.length === 0) return ''
        let str = ''
        let current = this.head
        while(current) {
            str += (String(current.data) + ', ')
            current = current.next
        }
        return str.slice(0, -2)
    }

    insert(data, index) {
        if(index < 0 || index > this.length) return false
        let insertNode = new Node(data)
        // 插入头部
        if(index === 0) {
            insertNode.next = this.head
            this.head = insertNode
        } else {
            let currentIndex = 0
            let currentNode = this.head
            while(currentIndex !== index - 1) {
                currentNode = currentNode.next
                currentIndex++
            }
            let indexNextNode = currentNode.next
            currentNode.next = insertNode
            insertNode.next = indexNextNode
        }
        this.length++
        return true
    }

    get(index) {
        if(index < 0 || index > (this.length - 1) || this.length === 0) return undefined
        let currentNode = this.head
        while(index--) {
            currentNode = currentNode.next
        }
        return currentNode.data
    }

    indexOf(data) {
        let currentNode = this.head
        let index = 0
        while(currentNode) {
            if(currentNode.data === data) {
                return index
            }
            currentNode = currentNode.next
            index++
        }
        return false
    }

    removeAt(index) {
        if(index < 0 || index > (this.length - 1)) return false
        let currentNode = this.head
        let preNode = null
        if(index === 0) {
            this.head = this.head.next
        } else {
            while(index > 0) {
                preNode = currentNode
                currentNode = currentNode.next
                index--
            }
            let nextNode = currentNode.next
            preNode && (preNode.next = nextNode)
        }
        this.length --
        return currentNode.data
    }
}

let list = new LinkedList()
list.append('小米')
list.append('华为')
list.append('oppo')
list.append('vivo')
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())