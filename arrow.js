// function doubleIt(num){
//     return num*2;
// }

// const doubleIt =function myFunction(num){
//     return num*2;
// }

const doubleIt = num => num * 2;  //arrow function
const add = (x,y) => x+y;
const give5=()=>5;
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
// const result=doubleIt(20);
const result=add(20, 50);
const result2=give5();
const result3=doMath(7, 7);
console.log(result3);