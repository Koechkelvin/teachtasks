function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

const obj = { b: 4, f: 5, y: 6 };
console.log(hasProperty(obj, 'b')) 
console.log(hasProperty(obj, 'c'))


//output;
//  true
 // false