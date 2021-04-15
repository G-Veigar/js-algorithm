function LazyMan(name) {
    let thisMan = new Man(name)
    thisMan.run()
    return thisMan
}

class Man {
    constructor(name) {
        this.name = name
        this.taskList = []
        this.sayHi()
    }

    sayHi () {
        let name = this.name
        this.addTask(() => {
            console.log(`Hi This is ${name}!`)
        })
        return this
    }

    addTask (task, isFrist = false) {
        if (isFrist) {
            this.taskList.unshift(task)
        } else {
            this.taskList.push(task)
        }
    }

    sleep (time) {
        this.addTask(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`Wake up after ${time}`)
                    resolve()
                }, time * 1000)
            })
        })
        return this
    }

    eat (food) {
        this.addTask(() => {
            console.log(`Eat ${food}`)
        })
        return this
    }

    sleepFirst (time) {
        this.addTask(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`Wake up after ${time}`)
                    resolve()
                }, time * 1000)
            })
        }, true)
        return this
    }

    run () {
        let taskList = this.taskList
        setTimeout(async () => {
            for (let i = 0; i < taskList.length; i++) {
                await taskList[i]()
            }
        }, 0)
    }
}

// LazyMan('Hank').sleep(10).eat('dinner')
// LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').sleepFirst(5).eat('supper')