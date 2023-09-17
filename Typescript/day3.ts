let arr:number[]=[1,2,3,4,5];

console.log(arr);

//JOIN  is used to seperate array elements by scpecial characters
console.log(arr.join("-"));
console.log(arr.join());
console.log(arr.join(' '));


//REST parameters and SPREAD Operators

function display(...value:number[])
{
    console.log(value);
}
display(10,20,30);
display();


function display1(str:string, ...value:number[])
{
    console.log(str);
    console.log(value);
}
display1("Meghali",100,200,300);
display1('diya');
