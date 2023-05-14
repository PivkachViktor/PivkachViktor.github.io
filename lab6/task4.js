const randomNumbers = [];
const min = -500;
const max = 500;

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor((max - min + 1) * Math.random()) + min;
    randomNumbers.push(randomNumber);
}

function playGame() {
    let total = 0;
    let count = 0;
    let remainingNumbers = randomNumbers.slice(); // Копіюємо масив, щоб не змінювати оригінальний масив

    while (remainingNumbers.length > 0) {
        const index = parseInt(prompt(`Виберіть номер елементу від 1 до ${remainingNumbers.length}:`), 10);

        if (isNaN(index) || index < 1 || index > remainingNumbers.length) {
            alert('Неправильно введений номер. Гра закінчена.');
            break;
        }

        const selectedNumber = remainingNumbers[index - 1];
        total += selectedNumber;
        count++;
        remainingNumbers.splice(index - 1, 1);

        alert(`Ви виграли ${selectedNumber}. Залишилося ${remainingNumbers.length} чисел. Ваш загальний виграш: ${total}.`);
    }

    if (count === randomNumbers.length) {
        alert(`Ви вибрали всі числа. Ваш загальний виграш: ${total}.`);
    }
}

playGame();
