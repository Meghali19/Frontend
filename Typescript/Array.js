var array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
//Direct printing array
console.log(array);
//FOR loop
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//FOREACH loop
array.forEach(function (element, i, a) {
    console.log("Value at index " + i + " is: " + element);
});
