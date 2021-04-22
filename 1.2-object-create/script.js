// Cara membuat Object pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Cipta',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 20,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }





// 2. Function Declaration

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },

    main: function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
    },

    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur!`);
    }
}

function Mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    // let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // Mendaftarkan method yang ada diObject lain ke
    // object mahasiswa
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    // Ternyata dibelakang layar tiga method dibawah ini tetap dibuat. Mau dipakai ataupun tidak
    // tetap dibuat dan disimpan ke dalam memory
    // mahasiswa.makan = function(porsi){
    //     this.energi += porsi;
    //     console.log(`Halo ${this.nama}, Selamat Makan!`);
    // },

    // mahasiswa.main = function(jam){
    //     this.energi -= jam;
    //     console.log(`Halo ${this.nama}, Selamat Bermain!`);
    // },

    // mahasiswa.tidur = function(jam){
    //     this.energi += jam * 2;
    //     console.log(`Halo ${this.nama}, Selamat Tidur!`);
    // }

    return mahasiswa;
}

let cipta = Mahasiswa('Cipta', 10);
let doddy = Mahasiswa('Doddy', 20);







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




// Cipta's Code
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

