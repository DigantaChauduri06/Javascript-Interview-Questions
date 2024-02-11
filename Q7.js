function multiply(a, b, c, d, e) {
    return a * b * c * d * e;
}


const curry = (fun) => {
    const currentNums = []
    const inner = (num) => {
        if (typeof num === "undefined") {
            return;
        }
        currentNums.push(num)
        if (currentNums.length >= multiply.length) {
            return fun(...currentNums)
        }
        return inner
    }
    return inner;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)(5)(39)); // Output: 120


// [0, 1, 2] 