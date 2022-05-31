import fetch from 'cross-fetch';

let passmark = 40;
let rohan =41;
let studentsMarkList =[41,70,80,40,30,90,100];
let studentsWithMark ={
    rohan : {
        science: 41,
        math: 70,
        social_student:80,
        eph: 40,
        nepali: 30,
        english: 90,
        opt_math: 100
    },
    biaksh : {
        science: 90,
        math: 100,
        social_student:60,
        eph: 30,
        nepali: 38,
        english: 95,
        opt_math: 97
    },
    bigyan : {
        science: 41,
        math: 70,
        social_student:80,
        eph: 40,
        nepali: 30,
        english: 90,
        opt_math: 100
    },
    dho : {
        science: 90,
        math: 100,
        social_student:60,
        eph: 30,
        nepali: 38,
        english: 95,
        opt_math: 97
    },
}

const url ='https://educationdata.urban.org/api/v1/schools/ccd/directory/2013/';
fetch(url)
.then(value=>value.json())
.then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})
// console.log("data:",getData());

// for (let item in studentsWithMark){
//     for (let key in studentsWithMark[item]){
//         // console.log(item,key,studentsWithMark[item][key]);
//         let len =studentsWithMark[item].length;
//         if(studentsWithMark[item][key]<passmark){
//             console.log(`${item} has failed with mark`,studentsWithMark[item][key],`in subject`,key);
//         } else {
//             console.log(`${item} has passed with mark`,studentsWithMark[item][key],`in subject`,key);
//         }
//     }
// }

// console.log(studentsWithMark.rohan);
// for (let key in studentsWithMark){
//     console.log("key",key);
//     console.log("value",studentsWithMark[key]);
// }
// console.log(studentsWithMark);

// if(rohan<passmark){
//     console.log("rohan has failed with mark ",rohan);
// } else {
//     console.log("rohan has passed with mark ",rohan);
// }

// for (let key in studentsWithMark){
//     let len =studentsWithMark[key].length;
//     for(let i=0; i<len; i++){
//         if(studentsMarkList[i]<passmark){
//             console.log(`${key} has failed with mark `,studentsWithMark[key][i]);
//         } else {
//             console.log(`${key} has passed with mark `,studentsWithMark[key][i]);
//        }
//     }
// }

// console.log("studentmarkslist fisrt mark:",studentsMarkList[7]);