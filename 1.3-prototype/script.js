// Cara membuat Object pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//     nama: 'Cipta',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }

// mahasiswa1.makan(20);

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 20,
//     makan: function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }





// 2. Function Declaration

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`)
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur.`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//         console.log(this);
//     }
    
//     console.log(this);
//     return mahasiswa;
// }

// let cipta = Mahasiswa('Cipta', 10);
// let doddy = Mahasiswa('Doddy', 20);





function Mahasiswa(nama, energi){
    // let mahasiswa = Object.create(methodMahasiswa);
    // let mahasiswa = {}
    // let this = Object.create(Mahasiswa.prototype); <- Dibelakang layar JS melakukan ini.
    this.nama = nama;
    this.energi = energi;

    // return mahasiswa;
    // return this;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!\nKini energimu: ${this.energi}`;
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain!`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur!`;
}

Mahasiswa.prototype.olahraga = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Berolahraga!`;
}

let cipta = new Mahasiswa('cipta', 10);



// versi class
// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamat Makan!`;
//     }

//     main(jam){
//         this.energi -= jam;
//         return `Halo ${this.nama}, Selamat Bermain!`;
//     }

//     tidur(jam){
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, Selamat Tidur!`;
//     }

// }

// let cipta = new Mahasiswa('Cipta', 10);
// let doddy = new Mahasiswa('Doddy', 20);

// console.log(cipta.makan(20));
// console.log(cipta.main(1));
// console.log(cipta.tidur(8));





// let angka = [1, 2, 3];
// console.log(angka.sort());


// let angka [];
// let angka = new Array(1,2,3);

// function Array(param1){
//     // let this = Object.create(Array.prototype);
//     this.param1 = param1;
//     this.param2 = param2;
//     this.param3 = param3;
// }

// Array.prototype.sort = function(param1, param2, param3){
//     // pengoperasian sort;
// }













// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`)
//     }
// }


// let cipta = new Mahasiswa('Cipta', 10);




// function Mobil(nama, warna, bensin){
//     this.nama = nama;
//     this.warna = warna;
//     this.bensin = bensin;

//     this.jalan = function(kecepatan){
//         this.bensin -= kecepatan;
//         console.log(`Mobil ${this.nama}, berjalan dengan kecepatan ${kecepatan} KM/h`);
//     }

//     this.berhenti = function(){
//         console.log(`Mobil ${this.nama}, berhenti.`);
//     }

//     this.isiBensin = function(jumlahBensin){
//         this.bensin += jumlahBensin;
//         console.log(`Mobil ${this.nama}, telah diisi bensin sebanyak ${jumlahBensin}.`)
//     }
// }

// let bmwm3 = new Mobil('BMW M3', 'biru', 90);
// let audi = new Mobil('Audi', 'Merah', 100);







// 4. Object.create()

