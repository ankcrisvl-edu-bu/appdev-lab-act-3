//Problem 2: Star Pattern
let base_number = 8;

console.log("Problem 2: Star Pattern\n");
let rows = base_number + 2;

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

showStars(rows);