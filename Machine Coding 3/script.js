(function () {
    const mainDiv = document.querySelector("#main");
    let boxes = [
        {
            text: "1",
            isClicked: false,
            index: 0
        },
        {
            text: "7",
            isClicked: false,
            index: 1
        },
        {
            text: "4",
            isClicked: false,
            index: 2
        },
        {
            text: "8",
            isClicked: false,
            index: 3
        },
        {
            text: "2",
            isClicked: false,
            index: 4
        },
        {
            text: "3",
            isClicked: false,
            index: 5
        },
        {
            text: "9",
            isClicked: false,
            index: 6
        }
    ];

    // create the box
    const area1 = document.createElement("div");
    const area2 = document.createElement("div");
    const area3 = document.createElement("div");

    area1.classList.add("area", "area1");
    area2.classList.add("area", "area2");
    area3.classList.add("area", "area3");

    for (let idx = 0; idx < boxes.length; idx++) {
        const box = document.createElement("div");
        box.classList.add("box", `box-${idx}`);
        box.innerHTML = boxes[idx].text;
        if (idx < 3) {
            area1.appendChild(box);
        } else if (idx < 5) {
            area2.appendChild(box);
        } else {
            area3.appendChild(box);
        }
    }

    // appending
    mainDiv.appendChild(area1);
    mainDiv.appendChild(area2);
    mainDiv.appendChild(area3);

    // Logic
    let clickQueue = [];
    const boxesElement = document.querySelector("box");
    for (let boxI = 0; boxI < boxes.length; boxI++) {
        const box = document.querySelector(`.box-${boxI}`);
        box.onclick = () => handleBoxClick(boxI);
    }
    const handleBoxClick = (index) => {
        if (boxes[index].isClicked) return;
        boxes[index].isClicked = true;
        const box = document.querySelector(`.box-${index}`);
        box.style.backgroundColor = "green";
        if (isAllGreen()) {
            clickQueue.push(box);
            convertToYellow();
        } else {
            clickQueue.push(box);
        }
    };
    const isAllGreen = () => {
        return boxes.every((box) => box.isClicked);
    };
    resetDefault = () => {
        clickQueue = [];
        boxes = boxes.map((box) => {
            box.isClicked = false;
            return box;
        });
    };
    const convertToYellow = () => {
        for (let i = 0; i < clickQueue.length; i++) {
            setTimeout(() => {
                clickQueue[i].style.backgroundColor = "yellow";
                if (i === clickQueue.length - 1) {
                    resetDefault();
                }
            }, i * 1000);
        }
    };
})();
