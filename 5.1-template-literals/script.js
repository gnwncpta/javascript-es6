// Template Literals / Template String
const nama = 'Cipta';
const umur = 17;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments
const mhs = {
    nama: 'Cipta',
    umur: 17,
    nrp: '04356712',
    email: 'awok@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <div class="nrp">${mhs.nrp}</div>
</div>`

console.log(el);