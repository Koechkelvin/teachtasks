function object(obj) {
    return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(object(obj)); 
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
