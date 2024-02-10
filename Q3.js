const sumFn = (num) => {
    let sum = num || 0;
    const innerFn = (nextNum) => {
        if (typeof nextNum === 'undefined') {
            return sum;
        }
        sum += nextNum;
        return innerFn;
    };
    return innerFn;
};

console.log(sumFn(1)(2)(3)(4)()); // Output: 10