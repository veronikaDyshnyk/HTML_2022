// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//
//             divPost.innerHTML = `
//             <h3>ID: ${post.id} </h3>
//             <h4>TITLE: ${post.title} </h4>
//             <h5>BODY: ${post.body} </h5>`;
//
//             wrap.appendChild(divPost);
//             document.body.appendChild(wrap);
//         }
//
//     });



//     2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//
//         for (const comment of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//
//             divComment.innerHTML = `
//             <h3>Id: ${comment.id}</h3>
//             <h4>Name: ${comment.name}</h4>
//             <h5>Email: ${comment.email}</h5>
//             <h6>Body: ${comment.body}</h6>
//             `;
//             wrap.appendChild(divComment);
//             document.body.appendChild(wrap);
//
//
//         }
//     });
//
