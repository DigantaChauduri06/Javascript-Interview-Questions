/**
 * https://www.youtube.com/watch?v=KZgBVkr7DMY&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=2
 * 
 * Question: You have to implement a function which takes time as a param and aborts the fetch when that time exceeds
 */

const fetchWithTimeout = (url, timer) => {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const signal = controller.signal;
        let id = null
        fetch(url)
            .then(res => {
                if (id) {
                    clearTimeout(id);
                }
                return res.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err))

        id = setTimeout(() => {
            if (!signal.aborted)
                controller.abort();
        }, timer)
    })
}


fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 200)
    .then(res => {
        console.log(res)
    })
    .catch((err) => {
        console.error("ERROR ", err)
    })