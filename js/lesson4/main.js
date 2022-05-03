// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareOfRectangle(a, b) {
//     return a * b;
// }
// //console.log(squareOfRectangle(2, 4));
// let rectangle = squareOfRectangle(3, 3);
// console.log(rectangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareOfCircle(r) {
//     return 3.14 * (r * r);
// }
// console.log(squareOfCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareOfСylinder(h, r) {
//     return 2 * 3.14 * h * r;
// }
// console.log(squareOfСylinder(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = [1, 2, 3, 4, 5];
//
// function notter(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
//
// notter(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(argument) {
//     document.write(`<p>${argument}</p>`);
// }
// paragraph('dgbdb');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// list('blabla');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list2(arg, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list2('adadda',4);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,3,4, 'qwe','asd',false];
//
// function arrayList(arr) {
//     document.write(`<ul>`)
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayList(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {id: 3, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 1, name: 'kolya', age: 29},
//     {id: 4, name: 'max', age: 31}
// ]
//
// function objectArray(array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// objectArray(users);

// - створити функцію яка повертає найменьше число з масиву
// let array =[1,2,3,4,5,77,8,22,3,-3];
//
// function minimum(arr) {
//     let min= arr[0];
//     for (const item of arr) {
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
// function sumOfEllements(arr) {
//     let result = 0;
//     for (const item of arr) {
//         result += item;
//     }
//     return result;
// }
//
// console.log(sumOfEllements(array));
