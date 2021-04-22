// Tagged Templates
const nama = 'Gunawan Cipta';
const umur = 17;

function coba(string, ...values){
    let result = '';
    string.forEach((str, i) => {
        // console.log(str);
        // console.log(i);
        result += `${str}${values[i] || ''}`;
    });
    return result;

    // return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);


// Highlight
// const nama = 'Gunawan Cipta';
// const umur = 17;
// const email = 'awok@gmail.com';

// function highlight(string, ...values){
//     return string.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. dan email saya adalah ${email}`;
// document.body.innerHTML = str;


// Tagged Template Literals
// const myName = 'Cipta';
// const student = true;

// function myTag(strings, ...expression){
//     // console.log(strings);
//     // console.log(expression);
//     let str0 = strings[0];
//     let str1 = strings[1];
//     let student;

//     if(siswa){
//         student = 'seorang siswa';
//     } else {
//         student = 'bukan siswa';
//     }

//     return str0 + myName + str1 + student;
// }

// const output = myTag`Halo saya ${myName} dan saya ${student} iyah.`
// console.log(output);