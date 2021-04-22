// readFileContent('a.md', function(a){
//     readFileContent('b.md', function(b){
//         readFileContent('c.md', function(c){
//             writeFileContent("result.md", a + b + c, function(){
//                 console.log("we are done");
//             })
//         })
//     })
// })

// const fs = require('fs');

// function fileA(file){
//     readFileContent(file);
// }

// function fileB(file){
//     readFileContent(file);
// }

// function fileC(file){
//     readFileContent(file);
// }

// fileA('a.md', fileB('b.md'), fileC('c.md'));

const fs = require('fs');
// let data = fs.readFileSync('a.md');
// console.log(`Read File Done: ${data}`);


// function calculate(param1, param2, callback){
//     // default operation
//     result = param1 + param2;

//     // dicek apakah paramter callback adalah function
//     if( typeof callback == 'function'){
//         // jika 'function' maka jalankan
//         result = callback(param1, param2);
//         // hasil result berisi function yang dipanggil dengan
//         // membawa parameter 
//     }

//     // mengembalikan result / hasil
//     return result;
// }

// function convert(x, y){
//     return `$ ${x + y}`;
// }

// a = calculate(200, 2000, convert);
// b = calculate(1000, 8000, convert);

// console.log(`1st Balance: ${a}`);
// console.log(`2nd Balance: ${b}`);





function readFileCallback(err,data){
    if (err){
        // console.log('Error Read File : ' + err);
        console.log(`Error Read File: ${err}`);
    }else{
        // console.log(data.toString());
        console.log(`${data.toString()}`);
    }
}
var data = fs.readFile('a.md',readFileCallback);