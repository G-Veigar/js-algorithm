## 队列

js中栈可以直接使用数组来模拟队列

```javascript
let queue = []

// 入队
queue.push(1)

// 出队
queue.shift()

// 查看队首
queue[0]

// 查看队尾
queue[queue.length - 1]

// size
stack.length

// isEmpty
stack.length === 0

// clear 清空队列
stack.length = 0
```

优先队列，不能特别方便模拟，只能自己封装
