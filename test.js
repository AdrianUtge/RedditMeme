let arrt = [12, 13, 14, 66, 53, 23, 23, 45, 65, 66, 55, 54, 33, 45, 67, 88, 98, 65, 79, 84, 18, 15, 65]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = [];
while (arrt.length) newArr.push(arrt.splice(0, 4));

console.log(newArr);