/**
 * https://www.youtube.com/watch?v=3jrfDk9k8rY
 * 
 * You have to write a function which cache the result of a api call if the same api is called again within defined time.
 * 
 * 
 */

const getData = (time) => {
    // Cache will store data and expiry
    const cache = {}
    return async (url, config = {}) => {
        const key = `${url}:${JSON.stringify(config)}`
        const entry = cache[key]
        // API call will only fire if and only if data is not present or expired;
        if (!entry || cache.expiry < Date.now()) {
            try {
                console.log("API CALL HAPPENING!!");
                const data = await fetch(url, config);
                const json = await data.json();
                cache[key] = { data: json, expiry: Date.now() + time }
                console.log("FROM API CALL DATA IS ", cache[key].data);
            } catch (err) {
                console.log("ERROR HAPPENED WHILE API CALL!");
            }
        } else {
            console.log("CACHED DATA IS ", cache[key].data);
        }
    }
}




// MAIN STACK

const call = getData(1500) // This function takes time
call("https://jsonplaceholder.typicode.com/todos/1", {})

setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {})
}, 800)

