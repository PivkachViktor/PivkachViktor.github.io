let sum = 0;
let count = 0;

while (sum <= 100) {
    const number = parseInt(prompt('Введіть число: '));
    if (isNaN(number)) { // перевіряємо, чи ввів користувач дійсне число
        alert('Будь ласка, введіть число!');
        continue; // якщо користувач ввів недійсне число, пропускаємо цю ітерацію циклу та просимо ввести число ще раз
    }
    sum += number;
    count++;
}

console.log(`Кількість введених чисел: ${count}`);
