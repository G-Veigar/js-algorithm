class Stack {
    constructor(data) {
        this.dataStore = data? [...data] : []
    }

    // 出栈
    pop() {
        return this.dataStore.pop()
    }

    // 进栈，入栈
    push(data) {
        return this.dataStore.push(data)
    }

    // 查看栈顶元素
    peek() {
        return this.dataStore[this.dataStore.length - 1]
    }

    // 查看栈长度
    size() {
        return this.dataStore.length
    }

    // 判断栈是否为空
    isEmpty() {
        return this.dataStore.length === 0
    }

    // 清空栈
    clear() {
        this.dataStore.length = 0
    }
}


let s= new Stack()

console.log(s.isEmpty())
s.push(1)
s.push(3)
console.log(s.peek())
console.log(s.size())
console.log(s.isEmpty())
s.pop()
console.log(s.peek())
console.log(s.size())