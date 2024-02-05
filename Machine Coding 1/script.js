// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
    const threshold = 1000;
    if (n > threshold) n = threshold;
    return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
    var pre = 'pre';
    var post = 'post';
    var results = [];
    if (getRandomBool(2)) {
        results.push(pre + text);
    }
    if (getRandomBool(2)) {
        results.push(text);
    }
    if (getRandomBool(2)) {
        results.push(text + post);
    }
    if (getRandomBool(2)) {
        results.push(pre + text + post);
    }
    return new Promise((resolve, reject) => {
        const randomTimeout = Math.random() * LATENCY;
        setTimeout(() => {
            if (getRandomBool(FAILURE_COUNT)) {
                reject();
            } else {
                resolve(results);
            }
        }, randomTimeout);
    });
}
// console.log();


/////////////////////////////////////////////////////////////////////////////////////////

(function () {
    const suggestionArea = document.getElementById("suggestion-area");
    const input = document.getElementById("search");

    const removeAllChildren = () => {
        if (suggestionArea.hasChildNodes()) {
            while (suggestionArea.firstChild) {
                suggestionArea.removeChild(suggestionArea.firstChild);
            }
        }
    }
    const hideSuggestionBox = () => {
        if (!input.value)
            removeAllChildren();
        suggestionArea.style.display = "none"
    }

    const showSuggestionBox = () => {
        if (!input.value)
            removeAllChildren()
        suggestionArea.style.display = "block"
    }

    const displaySuggestions = (event) => {

        const text = event.target["value"]
        removeAllChildren()
        if (text) {
            // clear the suggestion first
            getSuggestions(text)
                .then((res) => {
                    res?.forEach(sug => {
                        const li = document.createElement("li")
                        li.innerHTML = sug;
                        suggestionArea.appendChild(li)
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    input.addEventListener("input", displaySuggestions)
    input.addEventListener("blur", hideSuggestionBox)
    input.addEventListener("focus", showSuggestionBox)

})()