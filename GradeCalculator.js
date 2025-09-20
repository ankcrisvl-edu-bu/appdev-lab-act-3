let base_number = 8; //last digit of my student id no.

// Problem 1: Grade Calculator
console.log("Problem 1: Grade Calculator\n");

function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    }
    else if (score >= 80 && score <= 89) {
        return 'B';
    }
    else if (score >= 70 && score <= 79) {
        return 'C';
    }
    else if (score >= 60 && score <= 69) {
        return 'D';
    }
    else {
        return 'F';
    }
}

score = base_number * 10 + 5;

console.log(`Base Number: ${base_number}`);
console.log(`Score: ${score}`);
console.log(`Grade: ${calculateGrade(score)}\n\n`);