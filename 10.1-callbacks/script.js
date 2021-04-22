// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));
// tampilkanPesan(halo);


// const mhs = [
//     {
//         "nama": "Gunawan Cipta",
//         "nrp": "043040023",
//         "email": "awok@gmail.sch.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Ilham Baskara",
//         "nrp": "133040123",
//         "email": "ilhambaskara@gmail.sch.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Kurniawan Basudara",
//         "nrp": "123456789",
//         "email": "kurniawanbaskara@gmail.sch.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 3
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++ ){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');





// Asynchronous Callback
function getDataMahasiswa(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if( xhr.readyState === 4 ){
            if( xhr.status === 200 ) {
                success(xhr.response);
            } else if( xhr.status === 404 ) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', response => {
    const mhs = JSON.parse(response);
    // mhs.forEach(m => console.log(m.nama));
    // console.log(mhs);
    console.log(mhs);
    for( isi of mhs){
        console.log(isi.nama);
    }
}, () => {
});
console.log('selesai');


// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: mhs => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');