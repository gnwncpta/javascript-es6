// $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=5c5eaa88&s=avengers',
//     success: movies => console.log(movies)
// })


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if( xhr.status === 200 ){
//         if( xhr.readyState === 4 ) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'https://www.omdbapi.com/?apikey=5c5eaa88&s=avengers');
// xhr.send();


// fetch('https://www.omdbapi.com/?apikey=5c5eaa88&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// adalah Object yang merepresentasikan keberhasilan / kegagalan 
// dari sebuah event yang asynchronous dimasa yang akan datang
// 
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve('Janji telah ditepati!')
//     } else {
//         reject('Ingkar Janji...');
//     }
// })

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))


// contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if( ditepati ) {
        setTimeout(() => {
            resolve('Ditepati setelah 2 detik!');
        }, 2000)
    } else {
        setTimeout(() => {
            reject('Tidak ditepati setelah 2 detik!');
        }, 2000)
    }
});

// console.log('mulai');
// console.log(janji2.finally(() => console.log('selesai menunggu!')).then( () => console.log(janji2) ));
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
// console.log('selesai');

// ditepati = false;
const janji3 = new Promise((resolve, reject) => {

    if(ditepati){
        setTimeout(() => {
            resolve('Respon adalah True');
        }, 2000)
    } else {
        setTimeout(() => {
            reject('Respon adalah False');
        }, 2000);
    }

});
console.log(janji3);
janji3
    .then(response => console.log(response))
    .catch(response => console.log(response));
// Promise.all()
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'David Rutnick',
//             pemeran: 'Doddy, Erik'
//         }]);
//     }, 1000);
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Bandung',
//             temp: 26,
//             kondisi: 'Cerah Berawan'
//         }]);
//     }, 500);
// });

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Promise.all([film, cuaca])
//     // .then(response => console.log(response));
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     })


// console.log('satu');
// setTimeout(() => {
//     console.log('dua');
// }, 5000);
// console.log('tiga');
