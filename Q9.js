function expensiveOperation(n) {
    console.log('Performing expensive operation...');
    return n * n
}

const memoize = (fun) => {
    const cache = {}
    return (n) => {
        if (n in cache) {
            return cache[n]
        }
        cache[n] = expensiveOperation(n);
        return cache[n]
    }
}

const memoizedExpensiveOperation = memoize(expensiveOperation);
console.log(memoizedExpensiveOperation(5)); // Output: Performing expensive operation... 25
console.log(memoizedExpensiveOperation(5)); // Output: 25 (Cached result)
