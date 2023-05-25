// Об'єкт для зберігання даних про фільм
var film = {
    id: 1,
    title: "Брати Супер Маріо в кіно",
    director: "Аарон Хорват, Майкл Єленік",
    trailerUrl: "https://youtu.be/xx6tdyH8iiE",
    releaseYear: 2023,
    boxOffice: "$1026000000"
};

// Новий об'єкт, який перевизначає метод toString()
var filmWithToString = Object.create(film);
filmWithToString.toString = function() {
    return "Фільм: " + this.title + "\n" +
        "Режисер: " + this.director + "\n" +
        "Трейлер: " + this.trailerUrl + "\n" +
        "Рік випуску: " + this.releaseYear + "\n" +
        "Касові збори: " + this.boxOffice;
};

// Об'єкт для зберігання даних про колекцію фільмів
var filmCollection = {
    films: [],
    addFilm: function(film) {
        this.films.push(film);
    },
    increaseBoxOffice: function(id, amount) {
        var film = this.films.find(function(film) {
            return film.id === id;
        });

        if (film) {
            var oldBoxOffice = film.boxOffice;
            film.boxOffice = Number(1026000000) + Number(amount);
            var newBoxOffice = film.boxOffice;
            return newBoxOffice - oldBoxOffice;
        }

        return 0;
    }
};

// Додавання фільму до колекції
filmCollection.addFilm(filmWithToString);

// Отримання елементів DOM
var titleElement = document.getElementById("title");
var directorElement = document.getElementById("director");
var trailerUrlElement = document.getElementById("trailer-url");
var releaseYearElement = document.getElementById("release-year");
let boxOfficeElement = document.getElementById("box-office");
let increaseBoxOfficeBtn = document.getElementById("increase-box-office-btn");
let amountInput = document.getElementById("amount-input");

// Встановлення значень елементів DOM з фільму
titleElement.textContent = filmWithToString.title;
directorElement.textContent = "Режисер: " + filmWithToString.director;
trailerUrlElement.innerHTML = '<a href="' + filmWithToString.trailerUrl + '">Переглянути трейлер</a>';
releaseYearElement.textContent = "Рік випуску: " + filmWithToString.releaseYear;
boxOfficeElement.textContent = "Касові збори: " + filmWithToString.boxOffice;

// Обробник події для кнопки "Збільшити касові збори"
increaseBoxOfficeBtn.addEventListener("click", function() {
    let amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
        let increasedAmount = filmCollection.increaseBoxOffice(filmWithToString.id, amount);

        if (increasedAmount > 0) {
            boxOfficeElement.textContent = "Касові збори: " + filmWithToString.boxOffice;
            alert("Касові збори були збільшені на " + increasedAmount);
        } else {
            alert("Фільм з ID " + filmWithToString.id + " не знайдений.");
        }
    } else {
        alert("Будь ласка, введіть коректну суму.");
    }
});






