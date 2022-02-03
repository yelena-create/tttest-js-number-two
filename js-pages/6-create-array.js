//сщздаем и добавляем коллекцию

const colorPickerOptions = [
    {label: 'red', color:'#F44336'},
    {label: 'green', color:'#4CAF58'},
    {label: 'blue', color:'#2196F3'},
    {label: 'gray', color:'#607DBB'},
    {label: 'pink', color:'#E91E63'},
    {label: 'indigo', color:'#3F5185'},
];

//ПИШЕМ ФУНКЦИЮ ДЛЯ СОЗДАНИЯ РАЗМЕТКИ КОЛОРПИКЕРОВ
 //сначала один
const option = colorPickerOptions[0]; //первое значение массива

const buttonEl = document.createElement('button');
buttonEl.type = 'button';
buttonEl.textContent = option.label; // значение ключа label
//МОЖНО ДОБАВИТЬ ИНЛАЙН ЛЮБОЕ CSS-СВОЙСТВО!!!
buttonEl.style.backgroundColor = option.color; //значение ключа color
buttonEl.style.width = 80;  //почему не работает???
// console.log(buttonEl);

//создаем массив кнопок олдскул - перебором

//     const elements = [];  //массив будущих кнопок

// for (let i = 0; i < colorPickerOptions.length; i+=1) {
//     const option = colorPickerOptions[i];
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker-option');
// buttonEl.textContent = option.label; // значение ключа label
//     buttonEl.style.backgroundColor = option.color;
//     elements.push(buttonEl);  //пушим кнопки в массив
// }
//     console.log(elements);

// //находим ссылку куда вешать и вешаем все сразу.
const colorPickerContainerEl = document.querySelector('.js-color-picker');
// colorPickerContainerEl.append(...elements);

// ********************новый способ**********************
//мап создает новый массив элементов той же длинны

// const elements = colorPickerOptions.map(option => {   //новый массив
//     const buttonEl = document.createElement('button');  //создаем элемент
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker-option');
//     buttonEl.textContent = option.label; // значение ключа label
//     buttonEl.style.backgroundColor = option.color;
        
//     return buttonEl;             //возвращаем элемент!!!
// });
// console.log(elements);   //уже массив, так как мап возвращает новый массив
// colorPickerContainerEl.append(...elements);

 //****************получаем массив опций и вернем массив с разметкой ***********/

const makeColorPickerOptions = (options) => {  //options is array
    return options.map(option => {   //новый массив
        const buttonEl = document.createElement('button');  //создаем элемент
        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker-option');
        buttonEl.textContent = option.label; // значение ключа label
        buttonEl.style.backgroundColor = option.color;
        
        return buttonEl;             //возвращаем элемент!!!
    });
};
const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);




