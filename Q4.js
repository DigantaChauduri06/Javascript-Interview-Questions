
const base = (number) => {

    const addSix = (number2) => {
        return number + number2
    }
    return addSix;
}


const addSix = base(6)

console.log(addSix(10)) // 16
console.log(addSix(16)) // 22