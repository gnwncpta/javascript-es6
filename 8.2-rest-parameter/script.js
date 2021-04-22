// Rest Parameter

function myFunc(...myArgs){
    return myArgs;
    return arguments;
    return [...arguments];
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    return Array.from(arguments);
}

// console.log(myFunc(1,2,3,4,5));

function jumlahkan(...angka){
    let total = 0;
    for( num of angka ){
        total += num;
    }
    return total;
    return angka.reduce((a, b) => a + b);
}

// console.log(jumlahkan(1,2,3,4,5));


// Array Destructuring
// const kelompok1 = ['Cipta', 'Doddy', 'Ilham', 'Kurniawan', 'Gisel'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(anggota);

// Array Destructuring menjadi Object Destrcuturing diatas
const kelompok2 = {
    ketua: 'Cipta',
    wakil: 'Gisel',
    anggota: {
        satu: 'Gading',
        dua: 'Martin',
        tiga: 'Ilham',
        empat: 'Kurniawan'
    }
}

const {ketua, wakil, anggota: {...anggota}} = kelompok2;
// console.log(`Ketua: ${ketua}
// Wakil: ${wakil}
// Anggota: ${anggota}`);
// console.log(anggota);

// Object Destructuring
const team = {
    pm: 'Cipta',
    frontEnd1: 'Ilham',
    frontEnd2: 'Kurniawan',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}

const {pm, ...myTeam} = team;
// console.log(myTeam);


// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

// console.log(filterBy('number', 1, 2, 'Cipta', false, 10, true, 'Doddy'));

function filterMakanan(type, ...values){
    if(type == 'makanan'){
        const [burger, nasi, , ] = values;
        console.log(burger);
        console.log(nasi);
    } else {
        const [, , water, juice] = values;
        console.log(water);
        console.log(juice);
    }
}

// filterMakanan('minuman', 'burger', 'nasi', 'water', 'juice');