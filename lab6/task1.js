// Задання масиву оцінок
const marks = [4, 3, 5, 3, 4];

// Знаходження середнього балу
const avgMark = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

// Функція для визначення категорії студента за середнім балом
function getStudentCategory(avgMark) {
    if (avgMark === 5) {
        return "відмінник";
    } else if (marks.includes(2)) {
        return "двійочник";
    } else if (marks.every((mark) => mark >= 4)) {
        return "відмінник або хорошист";
    } else if (marks.some((mark) => mark === 3)) {
        return "трійочник";
    } else {
        return "хорошист";
    }
}

// Виведення результату
console.log(`Середній бал: ${avgMark}, категорія: ${getStudentCategory(avgMark)}.`);
