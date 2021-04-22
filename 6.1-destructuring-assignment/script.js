// **** Destructuring Variables / Assignment

// ** Destructuring Array
// const perkenalan = ['Hallo', 'nama', 'saya', 'Gunawan Cipta'];

// const [salam, satu, dua, nama] = perkenalan;

// ** skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(nama);


// ** swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// ** return value pada function
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// ** Rest Parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(values);


// ** Destructuring Object
// const mhs = {
//     nama: "Gunawan Cipta",
//     umur: 17
// };

// const { nama, umur } = mhs;
// console.log(nama)
// console.log(umur)

// ** Assignment tanpa declaration object
// ({nama, umur} = { nama: "Gunawan Cipta", umur: 17 });
// console.log(nama);

// ** Assign ke Variable baru
// const mhs = {
//     nama: "Gunawan Cipta",
//     umur: 17
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

// ** Memberikan Default Value
// const mhs = {
//     nama: "Gunawan Cipta",
//     umur: 17,
//     email: 'awok@gmail.com'
// };

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

//  ** Memberikan nilai default + assign ke variable baru
// const mhs = {
//     nama: "Gunawan Cipta",
//     umur: 17,
//     email: 'awok@gmail.com'
// };

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);


// ** Rest Parameter
// const mhs = {
//     nama: "Gunawan Cipta",
//     umur: 17,
//     email: 'awok@gmail.com'
// };

// const { nama, ...value } = mhs;
// console.log(value);


// ** Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: "Gunawan Cipta",
    umur: 17,
    email: 'awok@gmail.com'
};

function getIdMhs({id, nama}){
    // return id;
    return `ID: ${id}\nName: ${nama}`;
}

console.log(getIdMhs(mhs));