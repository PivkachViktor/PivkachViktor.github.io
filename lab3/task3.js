const n = parseInt(prompt('Введіть натуральне число n: '));

let k = 1;
let factorial = 1;

while (factorial < n) {
    k++;
    factorial *= k;
}

console.log(`Найменше число k, для якого k! >= ${n}, дорівнює ${k}`);
