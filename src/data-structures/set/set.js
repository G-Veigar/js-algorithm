class Set {
    constructor(data) {
        this.dataMap = {}
        this.size = 0
        data && data.forEach(item => {
            if(!(item in this.dataMap)) {
                this.dataMap[item] = 1
                this.size++
            }
        })
    }

    add(data) {
        if(data in this.dataMap) return false
        this.dataMap[data] = 1
        this.size++
        return true
    }

    delete(data) {
        if(!(data in this.dataMap)) return false
        delete this.dataMap[data]
        this.size--
        return true
    }

    has(data) {
        return (data in this.dataMap)
    }

    clear() {
        this.dataMap = {}
    }

    toStirng() {
        return Object.keys(this.dataMap).join(', ')
    }

    // 交集
    // intersect(otherSet) {
    //     let smallSet, bigSet
    //     if(this.size > otherSet.size) {
    //         smallSet = otherSet
    //         bigSet = this
    //     } else {
    //         smallSet = this
    //         bigSet = otherSet
    //     }
    // }

    // 并集
    // union() {
    
    // }
}

let s = new Set()

s.add('da')

s.add('fa')

console.log(s.toStirng())
