function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

console.log(helloWorldGenerator)