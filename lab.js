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

let num_2 = 368;

function isprime (anumber) {
    let primecheck = 2;
    while (primecheck <= num_2/2) {
        if (num_2 % primecheck != 0) {
            primecheck += 1;
        } else {
            return isprime(num_2+=1)
        }
    }
    console.log(num_2)
}
isprime(num_2)


// INPUT n
// i = 2
// answer = prime
// WHILE i <= n / 2
//     rem = n % i
//     IF rem is not equal to 0
//         i = i + 1
//     ELSE
//         answer = not prime
//         END WHILE LOOP
// OUTPUT answer