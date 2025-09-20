//Problem 3: Prime Number Checker
let base_number = 8;

console.log("\n\nProblem 3: Prime Number Checker\n");
let numberToCheck = base_number + 10;

function isPrime(n) {
    if (n < 2) {
        return "Not Prime";
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}

console.log(`Base number + 10: ${numberToCheck}`);
console.log(`Check ${numberToCheck}: ${isPrime(numberToCheck)}`);