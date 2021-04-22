var users = fetch('http://jsonplaceholder.typicode.com/users/2')
    .then((response) => {
    const json = response.json();
    console.log(json);
    return json;
    // console.log(users);
    })
    .then(function(response){
        console.log(response);
    });

console.log(users);


// =====================================================================================================

// const getPost = () => {
//     return fetch('http://jsonplaceholder.typicode.com/posts/2');
//     // resolve('berisi response')
// }

// const getAuthor = (id) => {
//     return fetch('http://jsonplaceholder.typicode.com/users/' + id);
// }

// const getComment = (id) => {
//     return fetch('http://jsonplaceholder.typicode.com/comments/' + id);
// }

// getPost() // #1. fetch post
// .then(postResponse => postResponse.json()) // #2. get & return post json
// .then(postResponse => getAuthor(postResponse.id) // #3. fetch author
//     .then(authorResponse => authorResponse.json() // #4 get & return comment json
//         .then(authorResponse => getComment(postResponse.id) // #5 fetch comment
//             .then(commentResponse => commentResponse.json()) // #6 get & return comment json
//             .then(commentResponse => {
//                 return ({postResponse, authorResponse, commentResponse});
//             })
//         )
//     )

//     .then(results => { // #9 read all responses
//         console.log(results.postResponse);
//         console.log(results.authorResponse);
//         console.log(results.commentResponse);
//         const commentResponse = results.commentResponse;
//         console.log(commentResponse.body);
//     })
// )
// .catch(error => console.log(error)) // #10 error handling