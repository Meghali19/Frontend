//TYPE ASSERTION
// angular bracket variable should be any type, object type, or unknown type
var a;
var temp = a;
//all methods of number is accessible to temp variable
// as syntax
var a;
var temp1 = a;
// all methods of string is accessible to temp1 variable
//==
// var x:number=10
// var y1:number=10
// console.log(x==y1)
// if(x==y1)
// {
//     console.log("Equal")
// }
// else{
//     console.log("Note equal")
// }
//===
// var x:number=10
// var y1:number=10
// console.log(x===y1)
// if(x===y1)
// {
//     console.log("Equal")
// }
// else{
//     console.log("Note equal")
// }
//SWITCH
// var choice:string='meghali'
// switch(choice){
//     case 'meghali':console.log("Meghali")
//                  break;
//     case 'nikita':console.log("Nikita")
//                   break;
//     default:console.log("Invalid")
//                 break;
// }
//LOOP
// for(var i=0;i<4;i++)
// {
//     console.log("Value: "+i)
// }
// console.log("Value of i outside loop: "+i)
//let KEYWORD
// for(let i1=0;i<4;i++)
// {
//     console.log("Value: "+i)
// }
//console.log("Value of i1 outside loop using let: "+i1)   ERROR AS I1 IS NOT DEFINED OUTSIDE THE LOOP
//const KEYWORD
var pi = 3.14;
//pi=17 error as pi is constant
//NORMAL FUNCTION
//without parameter and without return type
// console.log("without parameter and without return type")
// function add(){
//       console.log(4+2)
// }
// add()
//with parameter and without return type
// console.log("with parameter and without return type")
// function add1( a:number, b:number){
//     console.log(a+b)
// }
// add1(5,2)
//without parameter and with return type
// console.log("without parameter and with return type")
// function add2():number{
//     return(4+2)
// }
// let result = add2()
// console.log(result)
//with parameter and with return type
// console.log("with parameter and with return type")
// function add3(x:number, y:number):number{
//     return(x+y)
// }
// console.log(add3(4,8))
//ANONYMOUS FUNTION
//without parameter and without return type
// console.log("without parameter and without return type")
// let temp2 = function (){
//       console.log(4-2)
// }
// temp2()
//with parameter and without return type
// console.log("with parameter and without return type")
// let temp3 = function ( a:number, b:number){
//     console.log(a-b)
// }
// temp3(5,2)
//without parameter and with return type
// console.log("without parameter and with return type")
// let temp4 = function ():number{
//     return(4-2)
// }
// let res = temp4()
// console.log(res)
//with parameter and with return type
// console.log("with parameter and with return type")
// let temp5 =function (x:number, y:number):number{
//     return(x-y)
// }
// console.log(temp5(4,8))
//FAT ARROW FUNCTION
console.log("Fat Arrow");
//without parameter and without return type
console.log("without parameter and without return type");
var temp6 = function () {
    console.log(4 - 2);
};
temp6();
//with parameter and without return type
console.log("with parameter and without return type");
var temp7 = function (a, b) {
    console.log(a - b);
};
temp7(5, 2);
//without parameter and with return type
console.log("without parameter and with return type");
var temp8 = function () {
    return (4 - 2);
};
var res1 = temp8();
console.log(res1);
//with parameter and with return type
console.log("with parameter and with return type");
var temp9 = function (x, y) {
    return (x - y);
};
console.log(temp9(4, 8));
