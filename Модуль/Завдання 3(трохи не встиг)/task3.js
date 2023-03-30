const words = ["apple", "banana", "orange", "peach", "kiwi"];
const maxLength = 5;
const filteredWords = filterWordsByLength(words, maxLength);
console.log(filteredWords); // ["apple", "peach", "kiwi"]

function filterWordsByLength (arr, length) {
    return arr.filter((el) => el.length > length)
}