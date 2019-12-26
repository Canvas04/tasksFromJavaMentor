/*
Задача 5

Функция принимает строку с числами, раздененными пробелом
Нужно вернуть строку с максимальным и минимальным числом

Пример:

highAndLow("1 2 3 4 5");  // "5 1"
highAndLow("1 2 -3 4 5"); // "5 -3"
highAndLow("1 9 3 4 -5"); // "9 -5"
*/

function fifth(str) {
    //убираю лишние пробелы в строке
    let newStr = str.replace(/\s+/gi, '');

    let result = Array.from(newStr);
    // result.filter(item => {
    //     return item >= 0;
    // });

    result.sort((a, b) => {
        return a - b;
    });


    //В этот массив будем засовывать максимальное и минимальное число
    let lastArr = [];
    lastArr.push(result[result.length - 1]);
    lastArr.push(result[0]);

    //Превратили массив в строку, и вернули ее
    let resultStr = lastArr.join(' '); // Сделал пробел в строке путем добавления его методом join
    return resultStr;
    console.log(resultStr)


};

// console.log(fifth('1 2 3 4 5 6 '));
// console.log( "hello world".replace(/\s/g,''))

//Функция не работает с отрицательными значениями
function fifthHomework(str) {
    const strWithoutSpaces = str.replace(/\s+/gi, '');

    console.log(strWithoutSpaces);

    let arrForSorting = Array.from(strWithoutSpaces);
    arrForSorting.sort((a, b) => {
        return a - b;
    });
    console.log(arrForSorting)

    let arrForMinAndMaxValues = [];
    arrForMinAndMaxValues.push(arrForSorting[arrForSorting.length - 1]);
    arrForMinAndMaxValues.push(arrForSorting[0]);


    let strWithMinAndMaxValues = arrForMinAndMaxValues.join(' ');
    return strWithMinAndMaxValues;
};
console.log(fifthHomework('1 2 3 -5'));
 

//Все работает , кроме того что при использовании метода Array.from отрицательные знаки чисел , если таковые имеются становятся отдельными 
//элементами массива

let a = '1 -2 -3 -4';
let b = a.split(' - ');
console.log(b);
console.log(a)