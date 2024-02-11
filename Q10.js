function add2(x) {
    return x + 2
}

function multiply3(x) {
    return x * 3;
}

const compose = (...funs) => {
    funs.reverse()
    let answer = -1;
    return (num) => {
        for (let fun of funs) {
            if (answer === -1) {
                answer = num;
            }
            answer = fun.apply(this, [answer])
        }
        const res = answer;
        answer = -1;
        return res;
    }
}

const composedFunction = compose(multiply3, add2);
console.log(composedFunction(3)); // Output: 15
console.log(composedFunction(5)); // Output: 5 + 2 = 7, 7 *3 = 21
