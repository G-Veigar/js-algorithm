// 模板解析
function render (template, obj) {
    let strArr = []
    let leftIndex = -1
    let currentNormalStr = ''
    let currentParamStr = ''
    let calc = (obj, protoStr) => {
        let protoArr = protoStr.split('.')
        let res = obj
        protoArr.forEach(item => {
            res = res[item]
        })
        return res
    }
    for(let i=0; i < template.length; i++) {
        let currentLetter = template[i]
        if (currentLetter === '{') {
            leftIndex = i
            currentParamStr += template[i]
            // 之前出现过 {,
            if (leftIndex >= 0) {
                currentNormalStr += currentParamStr
            }
            currentNormalStr += currentParamStr
        } else if (currentLetter === '}') {
            // 匹配成功一个{}
            if (leftIndex >= 0) {
                currentParamStr += template[i]
                strArr.push(currentNormalStr)
                currentNormalStr = ''
                let calcRes = calc(obj, currentParamStr.slice(1, -1))
                strArr.push(calcRes)
                currentParamStr = ''
                leftIndex = -1
            } else {
                currentNormalStr += template[i]
            }
        } else {
            if (leftIndex < 0) {
                currentNormalStr += template[i]
            } else {
                currentParamStr += template[i]
            }
        }
    }
    return strArr.join('')
}

let ctx = {
    a: {
        a: 'AA',
        b: 'AB',
        c: 'AC'
    },
    b: {
        a: 'BA',
        b: 'BB',
        c: 'BC'
    },
    c: {
        a: '呵呵'
    }
}

let template =`a{a.b}aa{b.c}aa {c.a}aaaa`

let res = render(template, ctx)

console.log(res)