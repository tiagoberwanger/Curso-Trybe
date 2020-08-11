//Part II - Exercise I
function fact(number) {
    var value=1;
    for (let i = 2; i <= number; i++) {
        value = value * i;
    }
    return value;
}

console.log(fact(5));