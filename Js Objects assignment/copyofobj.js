function swapKey(obj) {
    const swapped = {};
    for (const [key, value] of Object.entries(obj)) {
        swapped[value] = key;
    }
    return swapped;
}

const obj = {c:2,d:5,e:6 };
console.log(swapKey(obj)); 

//output
// { '2': 'c', '5': 'd', '6': 'e' }
