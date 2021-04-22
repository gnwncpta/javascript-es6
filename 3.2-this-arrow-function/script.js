// Konsep this pada arrow function 

// Constructor Function
// const Mahasiswa = function(){
//   this.nama = 'Cipta';
//   this.umur = 17;
//   this.sayHello = function(){
//     return `Halo, nama saya ${this.nama}. Saya berumur ${this.umur} tahun.`;
//   }
// }

// const cipta = new Mahasiswa();
// console.log(cipta.sayHello());



// ARROW FUNCTION
// const Mahasiswa = function() {
//   this.nama = 'Cipta';
//   this.umur = 17;
//   this.sayHello = () => `Halo, nama saya ${this.nama}. Saya berumur ${this.umur} tahun.`;
// }

// const cipta = new Mahasiswa();
// console.log(cipta.sayHello());



// OBJECT LITERAL
// const mhs1 = {
//   nama: 'Cipta',
//   umur: 17,
//   sayHello: () => {
//     // console.log(`Halo, nama saya ${this.nama}. Saya berumur ${this.umur} tahun.`)
//     console.log(this);
//   }
// }



// const Mahasiswa = function(){
//     this.nama = 'Cipta';
//     this.umur = 17;
//     this.sayHello = function(){
//       console.log(`Halo, nama saya ${this.nama}. Saya berumur ${this.umur} tahun.`);
//     }
  
//     setInterval(() => {
//       console.log(this.umur++);
//     }, 500);
  
//   }
  
//   const cipta = new Mahasiswa(); 



const box = document.querySelector('.box');

box.addEventListener('click', function(){
    let size = 'size';
    let caption = 'caption'

    if(this.classList.contains(size)){
        [size, caption] = [caption, size]
    }

    this.classList.toggle(size);
    setTimeout(() => {
        this.classList.toggle(caption);
        // console.log(this);
    }, 600)
});