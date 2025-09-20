//Problem 4: Multiplication Table
let base_number = 8;

console.log("\n\nMultiplication Table\n");

let n = base_number;
console.log(`Base number: ${n}\n`);

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(base_number);