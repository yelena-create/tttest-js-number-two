/**Функция, которая передается
 *  другой функции как аргумент - называется callback
 * функция, которая принимает др. функцию,
 *  называется функцией высшего порядка*/

const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
};

const add = function (x, y) {
    return x + y;
 };
const min = function (x, y) {
    return x - y;
 };
doMath(2, 3, add);
doMath(9, 5, min);
/**чтобы не писать много одинаковых функций,
 * пишем только  аргументы
 *  и что с ними сделать */
// т.е меняется только рабочая функция,
//     а функция приема остается.