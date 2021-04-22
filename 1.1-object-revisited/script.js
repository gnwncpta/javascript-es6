// Cara membuat Object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Cipta',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     },

//     apaini: function(){
//         console.log(this)
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
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(this);
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`)
//     }

//     return mahasiswa;
// }

// let cipta = Mahasiswa('Cipta', 10);
// let doddy = Mahasiswa('Doddy', 20);
// let eric = Mahasiswa('Eric', 20)







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

function Manusia(nama, energi, kekuatan){
    this.nama = nama;
    this.energi = energi;
    this.kekuatan = kekuatan;

    this.makan = function(porsi){
        this.energi += porsi * 2;
        console.log(`${this.nama} Telah makan sebanyak ${porsi} Porsi`);
    }

    this.olahraga = function(jam){
        this.kekuatan += jam;
        console.log(`${this.nama} Telah olahraga selama ${jam} Jam`);
    }

    this.drunk = function(bottle){
        this.kekuatan -= bottle;
        console.log(`${this.nama} Telah mabuk sebanyak ${bottle} Botol`);
    }

    this.lari = function(km){
        this.energi -= km * 2;
        this.kekuatan += km;
        console.log(`${this.nama} Telah lari sepanjang ${km} KM`);
    }

}

let oreki = new Manusia('Oreki', 50, 100);










// 4. Object.create()