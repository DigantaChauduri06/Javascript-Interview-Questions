const curry = (fun) => {
    const inner = (...args) => {
        console.log(args.length);
        if (args.length >= fun.length) {
            return fun(...args);
        } else {
            return (...moreArgs) => inner(...args, ...moreArgs);
        }
    };
    return inner;
};

const multiply = (...args) => {
    return args.reduce((prev, cur) => prev * cur, 1);
};

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)(5)); // Output: 120
