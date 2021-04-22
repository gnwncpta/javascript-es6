// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Cipta', 'Ilham', 'Kurniawan'];
// console.log(...mhs);
// kode diatas akan menjadi seperti dibawah ini ketika di console
// > Cipta Ilham Kurniawan

// Menggabungkan 2 array
// const mhs = ['Cipta', 'Ilham', 'Kurniawan'];
// const dosen = ['Gisel', 'Gading', 'Martin'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang2 = mhs.concat(dosen);
// console.log(orang);

// Meng-copy array
// const mhs = ['Cipta', 'Ilham', 'Kurniawan'];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
console.log(nama.textContent);
console.log(...nama.textContent);
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(...nama.textContent);
nama.innerHTML = huruf;
console.log(huruf);