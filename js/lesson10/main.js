// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let divElement = document.createElement('div');
// divElement.setAttribute('id','text');
// divElement.innerText = 'hello';
//
// let button = document.createElement('button');
// button.innerText = 'click';
//
// document.body.append(divElement,button);
//
// button.onclick = function () {
//     divElement.style.display = 'none';
// }
//
// button.onclick = function () {
//     divElement.style.visibility = 'hidden';
// }
//
// button.onclick = function () {
//     divElement.remove();
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// input.type = 'number';
//
// let button = document.createElement('button');
// button.innerText = 'click';
//
// document.body.append(input,button);
// button.addEventListener('click', function () {
//     if(input.value >= 18){
//         alert('hello')
//     }else {
//         alert('no')
//     }
//     input.value = '';
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementById('out');
// button.addEventListener('click', function () {
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input11.value);
//     console.log(document.forms.form2.input22.value);
// })

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThre = document.createElement('input');
//
// let button = document.createElement('button');
// button.innerText = 'send';
//
// document.body.append(inputOne, inputTwo, inputThre, button);
// button.addEventListener('click', function () {
//
//     let row = inputOne.value;
//     let column = inputTwo.value;
//     let inside = inputThre.value;
//
//     function table(row, column, text) {
//         let table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < row; i++) {
//             let rowElement = document.createElement('tr');
//             table.appendChild(rowElement);
//
//
//             for (let j = 0; j < column; j++) {
//                 let cellElement = document.createElement('td');
//                 // table.appendChild(cellElement);
//                 cellElement.innerText = `${text}`;
//                 cellElement.style.border = '1px solid black';
//                 rowElement.appendChild(cellElement);
//             }
//         }
//     }
//     table(row, column, inside);
// })
