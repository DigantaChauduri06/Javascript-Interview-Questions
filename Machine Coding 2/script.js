
//https://www.youtube.com/watch?v=8rPujr5rZtc&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=5

(function () {
    const search = document.getElementById("search")
    const onChange = (event) => {
        console.log(event);
    }

    const debounce = (func, delay) => {
        let timer;
        console.log("CALLED DEBOUNCE");
        return (...args) => {
            // let timer;
            console.log("CALLED INNER");

            const context = this;
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(context, args)
            }, delay)
        }
    }

    // debounce with leading and trailing
    const debounce_withparms = (func, delay, options) => {

    }

    const debounceSearch = debounce(onChange, 1000)

    search.addEventListener('keyup', (e) => debounceSearch(e))
})()