let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);


/* output
String One
String One
true */