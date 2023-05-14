function sumDigitsBetweenFirstAndLast(number) {
    const digits = number.toString().split('').map(Number); // розбиваємо число на масив цифр
    const firstDigit = digits.shift(); // видаляємо першу цифру та зберігаємо її
    const lastDigit = digits.pop(); // видаляємо останню цифру та зберігаємо її
    let sum = 0;
    digits.forEach((digit) => { // для кожної цифри, яка залишилася, додаємо її до суми
        sum += digit;
    });
    return sum;
}

// Приклад використання:
const number = 1234;
const sum = sumDigitsBetweenFirstAndLast(number);
console.log(`Сума цифр числа ${number}, які знаходяться між першою та останньою цифрою, дорівнює ${sum}`);
