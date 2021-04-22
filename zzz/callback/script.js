// Simple Callback
// function p1(){
//     console.log('p1');
// }

// function p2(){
//     setTimeout(() => {
//         console.log('p2');
//     }, 2000)
// }

// function p3(){
//     console.log('p3');
// }

// p1();
// p2();
// p3();


// AJAX Callback
function requestAjax(id, successCallback, failedCallback) {

    // inisialisasi library XML Http Request
    const xhr = new XMLHttpRequest();

    // set target request
    if( id == ''){
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
    } else {
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + id);
    }

    // terapkan callback
    xhr.onload = function() {
        if(xhr.status === 200){
            console.log(xhr.status);
            successCallback(xhr.responseText);
        } else{
            failedCallback(xhr.status);
        }
    }

    // mulai request
    xhr.send();

}

function successCallback(data){
    // jadikan object data ini
    data = JSON.parse(data);

    const li = funcUL(data);
    const ul = document.querySelector('ul');

    ul.innerHTML = li;
}

function failedCallback(data){
    switch(data){
        case 404:
            console.log('404 NOT FOUND!');
            break;
        case 403:
            console.log('403 FORBIDDEN');
            break;
        case 401:
            console.log('401 UNAUTHORIZED');
            break;
    }
}

function funcUL(data){
    const {
           id,
           name, 
           username, 
           email, 
           phone, 
           website,
           address: {
               street, 
               city,
               zipcode
           }
        } = data;

    return `<li>ID: <strong>${id}</strong></li>
            <li>Name: <strong>${name}</strong></li>
            <li>Username: <strong>${username}</strong></li>
            <li>Email: <strong>${email}</strong></li>
            <li>Phone: <strong>${phone}</strong></li>
            <li>Website: <strong>${website}</strong></li>
            <span></span>
            <li>Street: <strong>${street}</strong></li>
            <li>City: <strong>${city}</strong></li>
            <li>Zipcode: <strong>${zipcode}</strong></li>`;
}

// const id = prompt('Enter id: ');


const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', function(){
    const id = document.querySelector('input').value;
    requestAjax(id, successCallback, failedCallback);
});