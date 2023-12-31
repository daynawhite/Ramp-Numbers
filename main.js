const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// let numberArray

// convert the number to an array of its digits
const numArray = (num) => {
    let numberArray = Array.from(num.toString()).map(Number);
    return numberArray
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
// const rampCount = () => {
//     if (rampNum(numberArray) != false) {
//         rampNumberCount++
//     }
    
// }
// Overall function that will test each number from 1 to the target number:
const findAllRampNos = (myNum) => {
    let rampNumberCount = 0

    for (let n = 1; n <= myNum; n++) {
        let numberArray = numArray(n);
        if (rampNum(numberArray) != false) {
            rampNumberCount++
        }    
    }
    console.log(`${rampNumberCount} total ramp numbers are less than ${myNum}.`)
    return rampNumberCount
}
// findAllRampNos(target)

function getPrompt() {
    rl.question('Enter a number: ', (target) => {
        findAllRampNos(target);
        getPrompt();
    });
  }
getPrompt()
