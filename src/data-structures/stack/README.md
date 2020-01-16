## 栈

js中栈可以直接使用数组来模拟栈

```javascript
let stack = []

// 入栈
stack.push(1)

// 出栈
stack.pop()

// size
stack.length

// peek查看栈顶
stack[stack.length - 1]

// isEmpty
stack.length === 0

// clear 清空栈
stack.length = 0
```