// function init(){
//     let nama = 'Gunawan Cipta';

//     return function(nama){
//         console.log(nama);
//     }

// }       

// let panggilNama = init();
// panggilNama('Cipta');
// panggilNama('Cipta');
// diatas merupakan function factories


function ucapkanSalam(waktu){
    // parent scope
    return function(nama){ // inner function
        console.log(`Halo ${nama}. Selamat ${waktu}, Semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');
selamatPagi('Cipta');
console.dir(selamatPagi);

// Separate 1
function init(){
    let nama = 'Cipta';
    return function(){
        console.log(`Nama kamu : ${nama}`);
    }
}

let memek = init();
// memek();

// console.dir(memek);

// Separate 2 - Closure Case 2 - Food
function menu(makanan, porsi){
    return `Kami menerima pesanan: '${makanan}' dengan porsi sebanyak: '${porsi} porsi'`;
}
console.log(menu('Seblak', 2));


function makan(makanan) { // parent function

    return (porsi) => { // inner function
        alert(`Kami menerima pesanan: '${makanan}' dengan porsi sebanyak: '${porsi} porsi'`);
        let harga1Porsi = 10;
        alert(`Harga per porsi = ${harga1Porsi}K \nTotal: ${harga1Porsi * porsi}K`);
    }

    // return porsi; // kalau mau jadi closure harus di return dulu inner functionnya
    // jadi closure itu adalah inner function yang di return di dalam parent function
    // dan juga inner functionnya mengambil variable, parameter di parent functionnya
}


// let userNeeds = prompt('Mau makan apa ?');
// let userPorsi = prompt('Mau berapa porsi');

// let seblak = makan(userNeeds);
// seblak(userPorsi);
// console.dir(seblak);

// Separate 3 - Closure 3 - Counter

let count = function(){
    let counter = 0;

    return () => {
        return ++counter;
    }
}


let kon = count();
console.log(kon());
console.log(kon());
console.log(kon());
console.log(kon());
console.log(kon());

// Separate 4 - Non Closure - Counter

function county(){
    let count = 0;
    return ++count;
}

console.log(county());
console.log(county());

// let add = (function(){
//     let counter = 0;
//     return function (){
//         return ++counter;
//     }
// })();

// let add = function(){
//     let counter = 0;
//     return function (){
//         ++counter;
//     }
// }

// let a = add();
// a();
// console.dir(add());
