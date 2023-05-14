// Функція декларативним способом
function convertCmToInch(cm) {
    return cm / 2.54;
}

// Використання функції
const cmValue = 10;
const inchValue = convertCmToInch(cmValue);
console.log(`${cmValue} см = ${inchValue} дюймів.`);

// Функція за допомогою анонімної функції
const convertCmToInch2 = function(cm) {
    return cm / 2.54;
}

// Використання функції
const cmValue2 = 20;
const inchValue2 = convertCmToInch2(cmValue2);
console.log(`${cmValue2} см = ${inchValue2} дюймів.`);

// Функція за допомогою стрілочної функції
const convertCmToInch3 = (cm) => cm / 2.54;

// Використання функції
const cmValue3 = 30;
const inchValue3 = convertCmToInch3(cmValue3);
console.log(`${cmValue3} см = ${inchValue3} дюймів.`);
