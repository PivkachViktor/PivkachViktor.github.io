const start = parseInt(prompt('Введіть початкове число діапазону: '));
const end = parseInt(prompt('Введіть кінцеве число діапазону: '));

let sum = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) { // перевіряємо, чи є число непарним
        sum += i; // якщо так, додаємо його до суми
    }
}

console.log(`Сума всіх непарних цілих чисел в діапазоні від ${start} до ${end} дорівнює ${sum}`);
