// for(nachalo;uslovie; shag){
    // deis
// }


// nachalo
// while(usl){
    // deis
    // shag
// }

// do while
// nachalo
// do{
    // deis
    // shag
// } while(usl)


// let num = 1
// while(num <= 10){
//     console.log(num);
//     num++
// }

// let i = 1
// do{
//     console.log(i);
//     i++
// }while(i <= 10)



// for of



// for in -> objecttin keylerine kayrylyp beret


function Symbol(s1,s2){
    let res = ''

    for(let i = 0; i <= s1.length - 1; i++){
        if(s1[i] == s2[i]){
            res = res == s1[i]
            console.log(s1[i]);
        } else{
            res = 0
            // res = res == s1[i]
            console.log(s1[0]);
        }
    }
    return res
}
console.log(Symbol('+-+-','+--+'));