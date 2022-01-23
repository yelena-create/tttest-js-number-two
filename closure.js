
//example 1
{ let addTo = function(passed){
  let inner = 2;
 return passed + inner ;
}
console.log(addTo(3));
}

//example 2
{
const passed = 4
 let addTo = function(){
   let inner = 2;
   return passed + inner   
 }
console.log(addTo())
}

//example 3
{ 
    let addTo = function (passed) {
       let add = function (inner) {
        return passed + inner;
        };
        return add;
};
/**создали переменную, в которую передаем первый основной параметр
 * первой функции (passed)*/
  let addThree = addTo(3);
console.dir(addThree);
// console.dir(addFour);

/**т.к.результат вызова  addThree = функция add, 
 * то передав сюда параметр, мы передаем его во вторую функцию,
 *  => получаем результат*/
console.log(addThree(2));

/**можно задать любое количество параметров 
 * БЕЗ изменения/повторения функции!!!*/
let addFour = addTo(5);
console.log(addFour(4));

}

/**в фн передаются два параметра - имя и блюдо.*/
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`)
// };
// makeDish('Poly', 'sous')


/**второй вариант:
 *  отдельно создается повар,
 *  а потом ему ставится задание..*/
{
    const makeSheff = function (name) {
        const makeDish = function (dish) {
            console.log(`${name} готовит ${dish}`);
        };
        return makeDish;
    };

    const mango = makeSheff('Mango');
    const roman = makeSheff('Roman');
    mango('soup');
    roman('pai');
    mango('sushi');
}

