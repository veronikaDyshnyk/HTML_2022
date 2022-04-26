<!-- - Є змінна х, якій ви надаєте довільне числове значення.-->
<!--Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3-->

// let x = +prompt("give me X");
// if (x !== 0 ){
//     console.log('virno');
// }else {
//     console.log('ne virno');
// }


<!-- - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число-->
<!--(в першу, другу, третю или четверту частину години).-->

// let time = +prompt('what time is it?');
// if(time >= 0 && time <= 15){
//     console.log('first quarter');
// }else if(time > 15 && time <= 30){
//     console.log('second quarter');
// }else if(time > 30 && time <= 45){
//     console.log('third quarter');
// } else if (time > 45 && time < 60){
//     console.log('fourth quarter');
// }else{
//     console.log('wrong input');
// }


<!-- - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).-->

// let day = '10';
// if (typeof day === 'number') {
//     if (day >= 1 && day <= 11) {
//         console.log('first decade');
//     } else if (day > 11 && day <= 20) {
//         console.log('second decade');
//     } else if (day > 20 && day <= 31) {
//         console.log('third decade');
//     } else {
//         console.log('wrong');
//     }
// } else {
//     console.log('string type');
// }


// let  day = +prompt('what day is it?');
// if (day >= 1 && day <= 11){
//     console.log('first decade');
// }else if(day > 11 && day <= 20){
//     console.log('second decade');
// }else if(day > 20 && day <= 31){
//     console.log('third decade');
// }else{
//     console.log('wrong input');
// }

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt('enter day number')) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('wrong');
// }


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let a = 1;
// let b = 7;
//
// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// } else if (a === b) {
//     console.log('equal');
// }
//





