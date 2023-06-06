// 1
// function slice(str, num, num1) {
//         let result = '';
//         for (i = num; i < num1; i++) {
//             result += str[i];
//         }
//         return result;
//     }
//     console.log(slice('note_A_Number', 0, 3));

//##################################################
// 2
function includes(str, from) {
            let arr = str.split("")
            let boolen = false
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === from){
                    boolen = true
                }
            }
            return boolen
        }
        console.log(includes("note_A_Number", '_'));

//################################################
// 4
    // function indexOf(str, from) {
    //     for (let i = 0; i < str.length; i++) {
    //       if (str[i] === from) {
    //         return i;
    //       }
    //     }
    //     return -1;
    //   }
    // console.log(indexOf("note_A_Number", "d"));

//###############################################
// 7
// function startWith(str, str2){
//     if(str[0] === str2){
//     return true
//     }else{
//         return false
//     }
// }
// console.log(startWith("b", "b"));

//##############################################
// 7
// function endtWith(str, str2){
//     let num = []
//     num = str.split("").reverse()
//         if(num[0] === str2){
//         return true
//         }else{
//             return false
//         }
//     }
// console.log(endtWith("open web", "b"));

//###############################################
// 8
// function repeat(str, num){
//     for(x = 0; x < num; x++){
//         console.log(str)
//         // str++
//     }
// }
// repeat("open web", 5);

