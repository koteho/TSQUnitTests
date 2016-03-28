function doSomething(a: number, b: number, c: number): number {
    
    return a + b + c;
}

function doSomethingElse(): number {
    var result = doSomething(2, 3, 4);

    return result;
}

console.log(doSomething(1, 2, 3));
