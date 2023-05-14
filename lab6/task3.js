const students = ['Юрій', 'Олександр', 'Юрій', 'Марія', 'Ірина', 'Юрій', 'Вікторія'];
const nameToFind = 'Юрій';

const count = students.reduce((acc, name) => {
    if (name === nameToFind) {
        acc++;
    }
    return acc;
}, 0);

console.log(`Ім'я ${nameToFind} зустрічається ${count} разів.`);
