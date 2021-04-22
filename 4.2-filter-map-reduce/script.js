const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3 
// for

// const newAngka = [];
// for( let i = 0; i < angka.length; i++ ){
//     if( angka[i] >= 3 ){
//         // console.log(angka[i]);
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


// filter
const newAngka = angka.filter( a => a >= 3 );
console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map( a => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .map(a => a / 2) // 12, 13,5
    .reduce((accumulator, currVal) => accumulator + currVal); // 78
console.log(hasil);


// cari angka > 8
// kalikan 2
// jumlahkan
const hasil2 = angka.filter( (a) => a > 8 ) // 9, 9
    .map(a => a * 2) // 18, 18
    .reduce((accumulator, currVal) => accumulator + currVal); // 36
console.log(hasil2);

function repeatLoop(minimum, total, action){
    for(let i = minimum; i <= total; i++){
        action(i);
    }
}
function minimum(param){
    return param;
}

function action(){
    return alert;
}

repeatLoop(minimum(1), 10, alert);

