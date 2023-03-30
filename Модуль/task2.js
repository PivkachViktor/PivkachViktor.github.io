
function User() {
    let a = parseInt(prompt("Введіть число a:"));
    let b = parseInt(prompt("Введіть число b:"));

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    return Math.floor(Math.random() * (b - a + 1)) + a;

}
let func = User();
console.log(func);