function findGCD(numbers) {
    // визначаємо функцію, яка знаходить найбільший спільний дільник двох чисел
    function findGCDOfTwoNumbers(a, b) {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let gcd = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        gcd = findGCDOfTwoNumbers(gcd, numbers[i]); // знаходимо найбільший спільний дільник двох чисел
    }

    return gcd;
}

const numbers = prompt('Введіть натуральні числа через кому: ').split(',').map(Number);
const gcd = findGCD(numbers);

console.log(`Найбільший спільний дільник чисел ${numbers.join(', ')} дорівнює ${gcd}`);
