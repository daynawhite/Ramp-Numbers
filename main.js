let target = 9999  
let rampNumberCount = 0
let num = 82558
let numberArray

// Evaluate the numberArray to determine whether it follows the Ramp Number rules:
const rampNum = (numArr) => {
    for (let i = 1; i < numArr.length; i++) {
        console.log(`comparing ${numArr[i]} and ${numArr[i-1]}`)
    if (numArr[i] < numArr[i-1]) {
        return false
    }; 
}
}

const numArray = (num) => {
    // convert the number to an array of its digits
    numberArray = Array.from(num.toString()).map(Number);
    console.log('numberArray: ' + numberArray)
}
numArray(num)
console.log(rampNum(numberArray))

const rampCount = () => {
    if (rampNum(numberArray)) {
        rampNumberCount++
    }
}