// 1. HTML Fragment
// const mhs = {
//     nama: 'Cipta',
//     umur: 17,
//     nrp: '04356712',
//     email: 'awok@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: 'Gunawan Cipta',
//         email: 'awok@gmail.com'
//     },
//     {
//         nama: 'Doddy Ferdiansyah',
//         email: 'doddyferd@gmail.com'
//     },
//     {
//         nama: 'Erik Setiawan',
//         email: 'Erikset@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4. Nested 
// HTML Fragment bersarang 

const mhs = {
    nama: 'Gunawan Cipta',
    semester: 5,
    mataKuliah: [ 
        'Rekayasa Web', 
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semeter">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;