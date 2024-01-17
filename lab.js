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
primetime: for(num_2 = 360; ; num_2++){
    let numstring = String(num_2);
    let notprime = [0, 2, 4, 5, 6, 8]
    if (notprime.some(numstring.length(numstring))) {
        console.log(num_2)
        break primetime;
    } else {
        continue;
    }
}