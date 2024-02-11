
const createCalculator = () => {
    let result = 0;
    const resultObj = {
        add(number) {
            result += number
        },
        subtract(number) {
            result -= number
        },
        multiply(number) {
            result *= number
        },
        divide(number) {
            if (number != 0) {
                result /= number
            }
        },
        getResult() {
            return result;
        }
    }

    return resultObj;
}


const calculator = createCalculator();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult()); // Output: 3
