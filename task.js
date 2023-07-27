// Task:1

// let newString=""
// function reverseStr(string){
//     for(let i=string.length-1;i>=0;i--){
//         newString +=string[i];
//     }
//     return newString;
// }
// const exemple=reverseStr('hello world');
// console.log(exemple);

// Task:2
// 
// let sum=0;
// function sumOfEven(number){
//     for(let i=0;i<number.length;i++){
//         if(number[i]>0){

//             sum +=number[i];
//         }
//     }
//     return sum;
// }
// const number=[2, -5, 10, -3, 7]
// console.log(sumOfEven(number))

// Task:3

const array=[3, 5, 2, 5, 3, 3, 1, 4, 5,5];
let maximumFrequency=1;
let count=0;
let item={};
function frequentElement(array){
    for(let i=0;i<array.length;i++){
        for(let j=i;j<array.length;j++){
            if(array[i]===array[j]){
            count++
            }
            if(maximumFrequency<count){
                maximumFrequency=count;
                item=array[i]
            }
        }
        count=0;
    }
    return item
}

console.log(frequentElement(array))