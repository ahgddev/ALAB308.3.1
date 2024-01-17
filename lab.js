// Part 1: Fizz Buzz

let num = 1;
while (num != 100) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (num % 3 == 0) {
        console.log("Fizz")
    } else if (num % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(num)
    }
    num++;
}