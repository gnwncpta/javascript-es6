// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// DIBELAKANG JAVASCRIPT MELAKUKAN INI
// var nama = undefined;
// var umur = undefined;
// var tahun = undefined;
// ƒ tambah(a, b){
//     return a + b;
// }

// UNCOMMENT THIS CODE LATER
console.log(nama);
console.log(umur);
console.log(tahun); 
console.log(tambah);
var nama = 'Gunawan Cipta';
var umur = 17;
var tahun = 2003;
function tambah(a, b){
    return a + b;
}
console.log(nama);

// CREATION PHASE PADA GLOBAL CONTEXT
// nama var = undefined;
// nama function = fn()
// hoisting
// window = global object
// this = window

// ================================================
// CREATION PHASE | Javascript
// JIKA ADA FN() MAKA YANG DI HOISITNG DULUAN ADALAH SI FN() nya
// JIKA ADA VARIABLE & FN() DI KONTEKS GLOBAL maka:
// semua variabel akan di isi undefined
// dan semua fn() diisi isi dari fn()
// ================================================
// ƒ tambah(a, b){
//  return a + b;
// }
// var nama = undefined;
// var umur = undefined;
// var tahun = undefined;

// ======================
// EXECUTION PHASE
// ======================
// LALU MASUKLAH JS KE EXECUTION PHASE
// SETELAH Creation Phase
// var nama = 'Gunawan Cipta';
// var umur = 17;
// var tahun = 2003;
// function tambah(a, b){
//     return a + b;
// }



// ƒ sayHello(){
//     return `Hallo, nama saya ${nama} umur ${umur} tahun.`;
// }

console.log(sayHello());
var nama = 'Cipta'; 
var umur = 17;

function sayHello(){
    return `Hallo, nama saya ${nama} umur ${umur} tahun.`;
}


// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// 





// var nama = 'Gunawan Cipta';
// var username = 'coocaainne';

// function cetakURL(username){
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('gnwncpta'));




// Execution Context Global
// function a(){
//     console.log('ini a');

//     function b (){
//         console.log('ini b');

//         function c (){
//             console.log('ini c');
//         }

//         c();

//     }

//     b();
    
// }
 
// a();



function satu(){
    var nama = 'Gunawan Cipta';
    console.log(nama);
}


function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);