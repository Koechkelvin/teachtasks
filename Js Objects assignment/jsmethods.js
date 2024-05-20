function all_properties(obj){
    return Object.getOwnPropertyNames(obj)

}
console.log(all_properties(Array));

/* output;
[ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]
*/