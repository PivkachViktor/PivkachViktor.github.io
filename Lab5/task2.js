// Декларативний спосіб
function getMonthName(monthNumber) {
    const monthNames = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
    ];

    return monthNames[monthNumber - 1];
}

// Анонімна функція
const getMonthNameAnon = function(monthNumber) {
    const monthNames = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
    ];

    return monthNames[monthNumber - 1];
};

// Стрілочна функція
const getMonthNameArrow = monthNumber => {
    const monthNames = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
    ];

    return monthNames[monthNumber - 1];
};

console.log(getMonthName(5)); // 'Січень'
console.log(getMonthNameAnon(2)); // 'Лютий'
console.log(getMonthNameArrow(6)); // 'Березень'
