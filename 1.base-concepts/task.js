"use strict";
//task 1
function solveEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        return []
    } else if (discriminant === 0) {
        return [-b/(2*a)]
    } else {
        return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)]
    }
}

console.log(solveEquation(1, -5, 6))
// task2
function calculateTotalMortgage(percent, contribution, amount , countMonths) {
    let monthlyPercent = percent / 100 / 12;
    let loanBody = amount - contribution;
    let payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)))
    let total = payment * countMonths
    return Number(total.toFixed(2))
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
console.log(calculateTotalMortgage(10, 0, 20000, 24))
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
console.log(calculateTotalMortgage(10, 20000, 20000, 24))
console.log(calculateTotalMortgage(10, 0, 10000, 36))
console.log(calculateTotalMortgage(15, 0, 10000, 36))