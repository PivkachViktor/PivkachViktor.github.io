/*Описати клас для для створення відповідної колекції обєктів. Реалізувати методи:
• отримання інформації щодо одного об’єкту (за Кодом),
• отримання вибірки з колекції згідно з вказаними запитами.
• додавання одного об’єкту,
• додавання колекції об’єктів,
• редагування інформації  про вказаний об’єкт.
• видалення інформації про вказаний об’єкт.

14. Об’єкт “Турнір” (Код, ПІБ;
стать; вік; назва країни, за яку він виступає; оцінки по трьох видах
змагань). Запит учасників з країни Х, вік яких не менший за Y.*/

let count = 0;
class TournamentUser{

    constructor(name, gender, age, country, mark){
        this.code = count++;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.country = country;
        this.mark = mark;
    }
}
class TournamentUsers{
    constructor(){
        this.item = [];
    }

    add(user){
        if(!(user instanceof TournamentUser))
            throw '${user} is not instance of TournamentUser';
        this.item.push(user);
    }

    getById(id){
        return this.item.find(user => user.code == id)
    }

    update(id, newUser){
        let user = this.getById(id);
        if(!user)
            throw "Not found";
        for(let k of ["name", "gender", "age", "country", "mark"]){
            if (newUser[k])
                user[k] = newUser[k];
        }
    }

    delete(id){
        let userIndex = this.item.findIndex(user => user.code == id);
        if(userIndex == -1)
            throw "Not found";
        this.item.splice(userIndex, 1);
    }

    getByCountry(country){
        return this.item.filter(user => user.country.toLowerCase() == country.toLowerCase());
    }

    getByAge(age){
        return this.item.filter(user => Number(user.age) >= Number(age));
    }
}

let firstUser = new TournamentUser("Василь", "Чоловік", "32", "Словакія", 7);
let secondUser = new TournamentUser("Яна", "Жінка", "23", "Україна", 13);
let tournamentUsers = new TournamentUsers();
tournamentUsers.add(firstUser);
tournamentUsers.add(secondUser);
tournamentUsers.getByCountry("словакія");
tournamentUsers.getByAge("23");