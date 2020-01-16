class Queue {
    constructor() {
        this.dataStore = []
    }

    // 进队列
    enqueue(data, level) {
        let dataObj = {
            value: data,
            level: level
        }
        if(this.dataStore.length === 0) {
            this.dataStore.push(dataObj)
            return
        }
        let currentLevel
        let insertIndex = 0
        let fined = false
        for(let i = 0; (i < this.dataStore.length && !fined); i++) {
            currentLevel = this.dataStore[i].level
            if(level < currentLevel) {
                insertIndex = i
                fined = true
            }
        }
        if(fined) {
            this.dataStore.splice(insertIndex, 0, dataObj)
        } else {
            this.dataStore.push(dataObj)
        }
    }

    // 出队列
    dequeue() {
        return this.dataStore.shift().value
    }
    
    // 查看队首
    front() {
        return this.dataStore[0].value
    }

    // 查看队尾
    back() {
        return this.dataStore[this.dataStore.length - 1].value
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

    toString() {
        return this.dataStore.map(item => item.value).join(',')
    }
}

let q = new Queue()

q.enqueue('ceo', 1)
q.enqueue('职员a', 6)
q.enqueue('职员b', 7)
q.enqueue('组长', 4)
q.enqueue('经理', 3)


console.log(q.toString())

