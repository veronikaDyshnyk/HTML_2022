// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let newArr = [];
//
// let user1 = new User(1, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user2 = new User(2, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user3 = new User(3, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user4 = new User(4, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user5 = new User(5, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user6 = new User(6, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user7 = new User(7, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user8 = new User(8, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user9 = new User(9, 'vova', 'bova', 'vova@.com', '+380962392232');
// let user10 = new User(10, 'vova', 'bova', 'vova@.com', '+380962392232');
//
// newArr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(newArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(newArr.filter(user => {
//     return user.id % 2 === 0;
// }));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(newArr.sort((user1, user2) => user2.id - user1.id));
// console.log(newArr.sort((a,b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'anna', 'bova', 'anna@.com', '+380962392232',['bread','soap']);
// let client2 = new Client(2, 'anna', 'bova', 'anna@.com', '+380962392232',['apple','carrot','onion']);
// let client3 = new Client(3, 'anna', 'bova', 'anna@.com', '+380962392232',['bread']);
// let client4 = new Client(4, 'anna', 'bova', 'anna@.com', '+380962392232',['milk','candy']);
// let client5 = new Client(5, 'anna', 'bova', 'anna@.com', '+380962392232',['sugar','salt']);
// let client6 = new Client(6, 'anna', 'bova', 'anna@.com', '+380962392232',['papper','curry']);
// let client7 = new Client(7, 'anna', 'bova', 'anna@.com', '+380962392232',['cream','strawberries']);
// let client8 = new Client(8, 'anna', 'bova', 'anna@.com', '+380962392232',['potato']);
// let client9 = new Client(9, 'anna', 'bova', 'anna@.com', '+380962392232',['bread']);
// let client10 = new Client(10, 'anna', 'bova', 'anna@.com', '+380962392232',['bread','potato']);
//
// let clientArray = [];
// clientArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//
// console.log(clientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//console.log(clientArray.sort((client1, client2) => client1.order.length - client2.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxspeed,volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume  = volume;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     this.info = function (){
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxspeed += newSpeed;
//     }
//
//     this.changeYear= function (newValue){
//         this.year += newValue;
//     }
//
//     this.addDriver =function (driver){
//         this.driver = driver;
//     }
// }
// let newCar1 = new Car('a6','audi',2020,240,1.8);
// newCar1.drive();
// newCar1.info();
// newCar1.increaseMaxSpeed(30);
// newCar1.changeYear(2);
// newCar1.addDriver('kolya');
// console.log(newCar1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model,producer,year,maxspeed,volume){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume  = volume;
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     info (){
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     }
//
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed += newSpeed;
//     }
//
//     changeYear (newValue){
//         this.year += newValue;
//     }
//
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
// let newCar1 = new Car('a6','audi',2020,240,1.8);
// newCar1.drive();
// newCar1.info();
// newCar1.increaseMaxSpeed(30);
// newCar1.changeYear(2);
// newCar1.addDriver({
//     name: 'kolya',
//     age:22
// });
// console.log(newCar1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name, age, footsize) {
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
//
// }
//
// class Prince {
//     constructor(name, age, findshoe) {
//         this.name = name;
//         this.age = age;
//         this.findshoe = findshoe;
//     }
//
// }
//
// let arrayOfCinderellas = [
//      new Cinderella('kate', 19, 36),
//      new Cinderella('marie', 18, 37),
//      new Cinderella('fiona', 17, 38),
//      new Cinderella('loise', 20, 37),
//      new Cinderella('gary', 22, 43),
//      new Cinderella('viola', 21, 37),
//      new Cinderella('miko', 19, 37),
//      new Cinderella('sara', 12, 35),
//      new Cinderella('slava', 19, 38),
//      new Cinderella('nina', 19, 37)
// ];
//
// let newPrince = new Prince('oleg',27,43);
//
// let find = (array,prince) =>{
//     for (const arrayElement of array) {
//         if (arrayElement.footsize === prince.findshoe){
//             return `${arrayElement.name}`;
//         }
//     }
// }
// console.log(find(arrayOfCinderellas, newPrince));
// console.log(arrayOfCinderellas.find(value => value.footsize === newPrince.findshoe));

