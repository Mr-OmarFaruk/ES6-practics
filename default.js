function add(num1, num2=50){
    // if(num2==undefined){
    //     num2=0;
    // }
    //OR
    //num2=num2||0;
    return num1+num2;
}
const total=add(15,5);
console.log(total);