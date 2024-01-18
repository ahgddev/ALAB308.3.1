// Part 1: Fizz Buzz

// let num = 1;
// while (num != 100) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("Fizz Buzz")
//     } else if (num % 3 == 0) {
//         console.log("Fizz")
//     } else if (num % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(num)
//     }
//     num++;
// }

// Part 2: Prime Time
// I need help with this.
let num_2 = 366;
let numstring = String(num_2);
let notprime = ["0", "2", "4", "5", "6", "8"];
let foundprime = false;

while (foundprime == false) {
    // debugger
    for(checknum in notprime) {
        console.log(numstring, checknum);
        if (numstring.endsWith(checknum)) {
            num_2++;
            continue;
        }
    }
    foundprime = true;
    console.log(num_2)
}