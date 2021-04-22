// for ... of
// array
// const mhs = ['Cipta', 'Doddy', 'Ilham', 'Kurniawan'];

// for( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for ( const m of mhs ) {
//     console.log(m);
// }

// String
// const nama = 'Kurniawan';
// for( const n of nama ) {
//     console.log(n);
// }


// const mhs = ['Cipta', 'Doddy', 'Ilham', 'Kurniawan'];
// mhs.forEach((m, i) => { 
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const [i, m] of mhs.entries()) { 
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
// for( n of liNama ) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//     // [1, 2, 3].forEach(a => jumlah += a);
//     let jumlah = 0;
//     for( a of arguments ) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));




// for .. in
// const mhs = {
//     nama: 'Cipta',
//     umur: 17,
//     email: 'awok@gmail.com'
// }

// for( m in mhs ) {
//     console.log(m);
// }


// Separate - Me

// const angka = [1,2,3,4,5];
// for( kl of angka ){
//     console.log(kl);
// }

// const nama = ['Cipta', 'Ilham', 'Kurniawan', 'Gisel', 'Gading', 'Martin'];
// for(let i = 0; i < nama.length; i++){
//     console.log(nama[i]);
// }

// nama.forEach(el => console.log(el));

// for( nm of nama ) {
//     console.log(nm);
// }

const string = 'Kurniawan';
for( str of string ) {
    console.log(str);
}