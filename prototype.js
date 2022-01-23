const objC = {
    z:5,
 };
console.log(`objC`, objC);

const objB = Object.create(objC);
objB.y = 5;
console.log(`objB`, objB);

const objA = Object.create(objB);
objA.x = 7;
console.log(`objA`, objA);
console.log(`objA.x =`, objA.x);
console.log(`objA.y =`, objA.y);
console.log(`objA.z =`, objA.z);
objA.z = 10; //не переименовывает ранее существующее свойство, а создает новое, если только это свойство не собственное
//соответственно
console.log(`objA.z`, objA.z)  //10 а не 5

//поиск собственного свойства на объекте
console.log(objA.hasOwnProperty('x')); //true
console.log(objA.hasOwnProperty('y')); //false
