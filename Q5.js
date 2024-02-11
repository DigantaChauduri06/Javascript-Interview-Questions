
const createCounter = () => {
    let count = 0
    return () => {
        return ++count;
    }
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
