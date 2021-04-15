class Event {
    constructor() {
        this.obList = {} // 存放observer
    }
    // 订阅
    on(eventName, observer) {
        if (!this.obList[eventName]) {
            this.obList[eventName] = []
        }
        this.obList[eventName].push(observer)
    }
    // 订阅一次
    once(eventName, observer) {
        const onceCb = function(...args) {
            observer.apply(this, args)
            this.off(onceCb)
        }
        this.on(eventName, onceCb)
    }
    // 发布/通知
    emit(eventName, payload) {
        const obs = this.obList[eventName]
        obs && obs.forEach(observer => {
            observer(payload)
        })
    }
    // 移除
    off(eventName, observer) {
        const obs = this.obList[eventName]
        if (!observer) {
            this.obList[eventName] = []
        } else {
            obs.find((thisOb, i) => {
                if (thisOb === observer) {
                    obs.splice(i, 1)
                    return true
                }
            })
        }
    }
}

export { Event }
