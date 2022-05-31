// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const {name, age} = document.forms.form1;//так можна доступитись до інпутів з форми
// let sendButton = document.getElementById('out');
// let key = 'key';
//
// let save = (name, age) =>{
//     let obj = {
//         name,
//         age
//     }
//     localStorage.setItem(key, JSON.stringify(obj));
// }
// sendButton.onclick = () => {
//     save(name.value, age.value);
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// const {model, type, volume} = document.forms.formCar;
// let sendButton = document.getElementById('send');
// let key = 'key';
//
// let save = (model, type, volume) => {
//     let storage = JSON.parse(localStorage.getItem(key)) || [];
//     storage.push({model, type, volume});
//     localStorage.setItem(key,JSON.stringify(storage));
// }
// sendButton.onclick = () =>{
//     save(model.value, type.value, volume.value);
// }




