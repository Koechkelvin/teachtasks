function getAllPropertyNames(obj) {
    let props = [];
    for (let prop in obj) {
        props.push(prop);
    }
    return props;
}

const exampleObj = {
    x: 3,
    y: 4
};

const protoObj = {
    z: 5
};
Object.setPrototypeOf(exampleObj, protoObj);

const allProperties = getAllPropertyNames(exampleObj);
console.log(allProperties);
//output;
// [ 'x', 'y', 'z' ]

