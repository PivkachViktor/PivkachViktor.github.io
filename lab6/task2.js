const visitors = [12, 23, 19, 15, 25, 17, 10]; // масив кількості відвідувачів

// номери днів, коли кількість відвідувачів була меншою за 20
const lessThan20 = [];
for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] < 20) {
        lessThan20.push(i + 1);
    }
}
console.log(`Дні, коли кількість відвідувачів була меншою за 20: ${lessThan20.join(', ')}`);

// номери днів, коли кількість відвідувачів була мінімальною
const minVisitors = Math.min(...visitors);
const minVisitorsDays = [];
for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] === minVisitors) {
        minVisitorsDays.push(i + 1);
    }
}
console.log(`Дні з мінімальною кількістю відвідувачів (${minVisitors}): ${minVisitorsDays.join(', ')}`);

// номери днів, коли кількість відвідувачів була максимальною
const maxVisitors = Math.max(...visitors);
const maxVisitorsDays = [];
for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] === maxVisitors) {
        maxVisitorsDays.push(i + 1);
    }
}
console.log(`Дні з максимальною кількістю відвідувачів (${maxVisitors}): ${maxVisitorsDays.join(', ')}`);

// загальна кількість відвідувачів у робочі дні
const workDaysVisitors = visitors.slice(0, 5).reduce((acc, curr) => acc + curr, 0);
console.log(`Загальна кількість відвідувачів у робочі дні: ${workDaysVisitors}`);

// кількість відвідувачів у вихідні дні
const weekendVisitors = visitors.slice(5).reduce((acc, curr) => acc + curr, 0);
console.log(`Кількість відвідувачів у вихідні дні: ${weekendVisitors}`);
