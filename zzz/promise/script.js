// const janjian = new Promise( 
//     (resolve, reject) => {
//         // salah satu dari 2 callback berikut
//         resolve('berhasil')
//         reject(new Error('Janji Dibatalkan'));
//     }
// );

// janjian
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

let ditepati = true;
const janji = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji Ditepati');
    } else{
        reject('Janji tidak Ditepati');
    }
})

janji
    .then(response => console.log(response))
    .catch(response => console.log(response))


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(function(response) { 
//         return response.json();
//     })
//     // then 2 kali karena then pertama mengembalikan promise lagi
//     .then(function(user) {
//         console.log(user);
//     })

// const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
// const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
// const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/comments/' + id)


// getPost()
//     .then(postResponse => postResponse.json())
//     .then(postResponse => getAuthor(postResponse.id) 
//         .then(authorResponse => authorResponse.json()
//             .then(authorResponse => getComment(postResponse.id)
//                 .then(commentResponse => commentResponse.json())
//                 .then(commentResponse => {
//                     return ({postResponse, authorResponse, commentResponse});
//                 })
//             )
//         )
//         .then( results => {
//             console.log(results.postResponse);
//             console.log(results.authorResponse);
//             console.log(results.commentResponse);
//         })
//     )
//     .catch(error => console.log(error));
        


const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/comments/' + id)

const a = getPost().then(res => res.json())
const b = a.then(res => getAuthor(res.id)).then(res => res.json())
const c = a.then(res => getComment(res.id)).then(res => res.json())

a.then(postResponse => {
    b.then(authorResponse => 
        c.then(commentResponse => {
            {postResponse, authorResponse, commentResponse}
        })
    )
    .then(results => {
        console.log(results.postResponse);
        console.log(results.authorResponse);
        console.log(results.commentResponse);
    })
})
.catch(err => console.log(err))