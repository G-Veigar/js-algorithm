class Queue {
    constructor(data) {
        this.dataStore = data? [...data] : []
    }

    // 进队列
    enqueue(data) {
        this.dataStore.push(data)
    }

    // 出队列
    dequeue() {
        this.dataStore.shift()
    }
    
    // 查看队首
    front() {
        return this.dataStore[0]
    }

    // 查看队尾
    back() {
        return this.dataStore[this.dataStore.length - 1]
    }
    
    size() {
        return this.dataStore.length 
    }

    isEmpty() {
        return this.dataStore.length === 0
    }

    clear() {
        this.dataStore.length = 0
    }
}