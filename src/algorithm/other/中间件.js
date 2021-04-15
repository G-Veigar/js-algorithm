// 洋葱形中间件
class Middlware {
    constructor(fun) {
        this._fun = fun // 要处理的函数
        this._mwList = [] // 存放所有的中间件
        this._index = 0 // middlware执行的标识位
        this._ctx = { // 中间件上下文对象
            request: [], // 请求参数
            response: undefined // 返回结果
        }
        this._this = null
    }

    async _next(goNext = true) {
        if (!goNext) {
            return
        }
        if (this._index < this._mwList.length) {
            let currentMw = this._mwList[this._index]
            this._index += 1
            await currentMw(this._ctx, this._next.bind(this))
        } else {
            this._ctx.response = await this._fun.apply(this._this, this._ctx.request)
        }
    }
    
    // 执行函数
    async run (...args) {
        this._this = this
        this._ctx.request = args
        await this._next()
        return this._ctx.response
    }

    use (mw) {
        this._mwList.push(mw)
    }
}

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 3000)
    })
}

let mwSum = new Middlware(sum)

mwSum.use(async (ctx, next) => {
    let params = ctx.request
    console.log(`mw1: ${params[0]} + ${params[1]}`)
    await next()
    console.log(`mw1: res is ${ctx.response}`)
})


mwSum.use(async (ctx, next) => {
    console.log(`mw2: begin`)
    await next()
    ctx.response = 'mw2 res'
    console.log(`mw2: end`)
})

mwSum.run(1, 2)