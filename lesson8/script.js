// reduse -> massivdin metodu,birok massiv kaitarbayt ->


let arr  = ['Abibillaev', 'Nurtilek']
// console.log(arr.reduce((acc,el)=> {
//     return el[0] + acc.slice(1) + ' ' + acc[0] + el.slice(1)
// }));


// console.log(arr.reduce((el,acc)=> {
//     return el[el.length - 1] + ' ' + acc[acc.length -1]
// }));

// console.log(arr.reduce((el,acc)=> {
//     return el.slice(0,el.length - 1) + acc[acc.length - 1] + " " + acc.slice(0,acc.length - 1) +  el[el.length - 1]
// }));


// function highAndLow(numbers){
//     return `${Math.min(...numbers.split(' ').map(el => +el))} ${Math.max(...numbers.split(' ').map(el => +el))}` 
//   }
//   console.log(highAndLow('2 3 4 9 78 56 230 -123'));


function reverseWords(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
  }
  console.log(reverseWords('double  spaces'));



// function correctPolishLetters (string) {
//     return string.split('').map((el)=> {
//         if(el === 'ą'){
//             return 'a'
//         } else if(el === 'ć'){
//             return 'c'
//         }else if(el === 'ę'){
//             return 'e'
//         }else if(el === 'ł'){
//             return 'l'
//         }else if(el === 'ń'){
//             return 'n'
//         }else if(el === 'ó'){
//             return 'o'
//         } else if(el === 'ś'){
//             return 's'
//         }else if(el === 'ź' || el === 'ż'){
//             return 'z'
//         } return el
//     }).join('')
//   }
// console.log(correctPolishLetters('Lech Wałęsa'));


// function generateHashtag(str) {
//   let result = str
//     .split(" ")
//     .filter((elem) => {
//       return elem !== "" && elem !== " ";
//     })
//     .map((el) => {
//       return el[0].toUpperCase() + el.slice(1);
//     })
//     .join("");
//   return str ? (result.length < 140 ? "#" + result : false) : false;
// }
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
// console.log('Codewars is nice');

// ishtegeni
// function generateHashtag(str) {
//   let result = str
//     .split(" ")
//     .filter((elem) => {
//       return elem !== "" && elem !== " ";
//     })
//     .map((el) => {
//       return el !== " " ? el[0].toUpperCase() + el.slice(1) : false;
//     })
//     .join("");
//   let hashtag = "#" + result;
//   return str && result && result.length < 140 ? hashtag : false;
// }
// console.log();



