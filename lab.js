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
primetime: for(num_2 = 48; ; num_2++){
    if (num_2 == 2 || num_2 == 3) {
        console.log(num_2)
        break primetime;
    } else if (num_2 % 2 != 0 && num_2 % 3 != 0 && num_2 % 5 != 0 && num_2 % 7 != 0) {
        console.log(num_2)
        break primetime;
    } else {
        continue;
    }
}