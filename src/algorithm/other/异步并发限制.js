function run(arr, limit) {
    return new Promise((resolve, reject) => {
        let index = 0
        let res = new Array(arr.length)
        function _r(i) {
            arr[i]().then(res => {
                res[i] = res
            }).catch(err => {
                res[i] = res
            }).finally(() => {
                if(index < arr.length) {
                    index++
                    _r(index)
                } else {
                    resolve(res)
                }
            })
        }
        index = limit
        for(let i = 0; i < limit.length; i++) {
            _r(i)
        }
    })
}