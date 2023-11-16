let target = 99999
let rampNumberCount = 0
let num
let numberArray

// convert the number to an array of its digits
const numArray = (num) => {
    numberArray = Array.from(num.toString()).map(Number);
    // console.log('numberArray: ' + numberArray)
}
// Evaluate the numberArray to determine whether it follows the Ramp Number rules:
const rampNum = (numArr) => {
    if (numArr.length > 1)
    {for (let i = 1; i < numArr.length; i++) {
        // console.log(`comparing ${numArr[i]} and ${numArr[i-1]}`)
    if (numArr[i] < numArr[i-1]) {
        return false
    }}
}
}
// Keep track of how many times rampNum finishes without a false return
const rampCount = () => {
    if (rampNum(numberArray) != false) {
        rampNumberCount++
        // console.log(rampNumberCount)
    }
}
// Overall function that will test each number from 1 to the target number:
const findAllRampNos = (myNum) => {
    for (let n = 1; n <= myNum; n++) {
        numArray(n);
        rampNum(numberArray);
        rampCount()
    }
}
findAllRampNos(target)
console.log(rampNumberCount)