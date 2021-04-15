// url参数解析成对象
function queryData(url) {
    let res = {}
    let search = url.split('?')[1]
    let paramArr = search.split('&')
    paramArr.forEach(item => {
        let paramItem = item.split('=')
        res[paramItem[0]] = paramItem[1]
    })
    return res
}

let url = 'http://www.baidu.com?name=111&hehe=heihei'

let qs = queryData(url)

console.log(qs)