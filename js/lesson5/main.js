// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1, 2, 3, 4, 5, 6];
// let middle = (arr) => {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum / arr.length;
// }
// console.log(middle(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,а виводить найбільше (Math використовувати заборонено);
// let minMax = (...arg) => {
//         let min = arg[0];
//         let max = arg[0];
//     for (const argument of arg) {
//         if (argument < min){
//             min = argument
//         }
//         if (argument > max){
//             max = argument
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(1, 4, 6, 8, 9, 0));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () =>{
//     array=[];
//     for (let i = 0; i <10; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
//     return array;
// }
// console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let random = (limit) =>{
//     array=[];
//     for (let i = 0; i <1; i++) {
//         array.push(Math.round(Math.random()*limit));
//     }
//     return array;
// }
// console.log(random(66));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1, 2, 3];
//
// let reverse = (arr) => {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// console.log(reverse(array));

// - створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями
// let arr = [
//     {
//         age: 11
//     },
//     {
//         age: 22
//     }
// ];
//
// let change = (array) =>{
//     let temporary = array[0];
//     array[0] =array[1];
//     array[1]= temporary;
//     return array;
// }
//
// //let change = (array) => [array[0],array[1],array[2]] = [array[2],array[1],array[0]];
//
// console.log(change(arr));

//
//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let regtangle = (a,b) => a *b;
// console.log(regtangle(22, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r) => 3.14 * Math.pow(r,2);
// console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cilinder = (h,r) => 2* 3.14 * r *h;
// console.log(cilinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr =[1,2,3];
//
// let nott = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// nott(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paregraf = (text) =>document.write(`<p>${text}</p>`);
// paregraf('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (text) => {
//     document.write(`<ul>
//          <li>${text}</li>
//          <li>${text}</li>
//          <li>${text}</li>
//      </ul>`)
// }
// list('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list2 = (text,num) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list2('hello',4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,3,4, 'qwe','asd',false];
//
// let arrayList = (array) =>{
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 3, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 1, name: 'kolya', age: 29},
//     {id: 4, name: 'max', age: 31}
// ]
//
// let objectArray = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
//     }
// }
// objectArray(users);

// - створити функцію яка повертає найменьше число з масиву
//  let array =[1,2,77,3,-3];
//
// let minimum =(array)=>{
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minimum(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 4, 5, 77];
//
// let sumOfEllements = (array) =>{
//     let res =0;
//     for (const arrayElement of array) {
//         res += arrayElement;
//     }
//     return res;
// }
// console.log(sumOfEllements(array));







