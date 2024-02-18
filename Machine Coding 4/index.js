
(function () {
    // declaration
    const carousel = document.getElementById("carousel-main");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const images = [1, 2, 3].map(img => `./assets/photo-${img}.jpeg`)
    let curPhotoIndex = 0;

    const imagesAddOnDOM = (images, tag) => {
        images.forEach((image, index) => {
            const img = document.createElement("img")
            img.classList.add("photo", "image-" + index)
            img.setAttribute("src", image)
            img.setAttribute("width", 200)
            img.setAttribute("height", 200)
            if (index !== 0) {
                img.classList.add("hidden")
            }
            tag.appendChild(img)
        })
    }

    const imageSwipe = (images, dir, index) => {
        const imgLen = images.length;
        const curIdx = document.querySelector(".image-" + index)
        curIdx.classList.add("hidden")
        curIdx.classList.remove("show")
        let nextIndex = index;
        if (dir === "left") {
            if (index === 0) {
                nextIndex = imgLen - 1;
            } else {
                nextIndex--;
            }
        } else {
            if (index === imgLen - 1) {
                nextIndex = 0;
            } else {
                nextIndex++;
            }
        }
        const nextElement = document.querySelector(".image-" + nextIndex)
        curPhotoIndex = nextIndex;
        nextElement.classList.add("show")
        nextElement.classList.remove("hidden")
    }


    // function call
    imagesAddOnDOM(images, carousel)

    // eventListners
    leftArrow.addEventListener("click", () => imageSwipe(images, "left", curPhotoIndex))
    rightArrow.addEventListener("click", () => imageSwipe(images, "right", curPhotoIndex))

})()