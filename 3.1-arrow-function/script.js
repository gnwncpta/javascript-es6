// Function Expression
// const tampilNama = function(nama){
//   return `Halo, ${nama}`;
// }

// console.log(tampilNama('Cipta'));

// DENGAN ARROW FUNCTION
// const tampilNama = (nama) => { return `Halo, ${nama}` }; 
// console.log(tampilNama('Cipta'));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Cipta', 'Pagi'));
// console.log(tampilNama('Erik', 'Malam'));

// [!] dibawah ini disebut dengan implisit return
// const tampilNama = nama => `Halo, ${nama}`; 
// console.log(tampilNama('Cipta'));

// const tampilNama = () => 'Hello World';
// console.log(tampilNama());



let mahasiswa = ['Gunawan Cipta', 'Doddy Ferdiansyah', 'Erik'];

// tanpa arrow function
// let jumlahHuruf = mahasiswa.map(function(nama){
//   return nama.length;
// });

// console.log(jumlahHuruf);


// DENGAN ARROW FUNCTION TAPI MENGEMBALIKAN ARRAY
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// DENGAN ARROW FUNCTION TAPI MENGEMBALIKAN OBJECT
let jumlahHuruf = mahasiswa.map( nama =>  ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);
console.table(jumlahHuruf); // tampilkan dalam bentuk table