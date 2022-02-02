const magicBtn = document.querySelector('.js-magic-btn');

    
//**********ЗАМЕНА КАРТИНКИ КОТИКА АЛЬТА И НАДПИСИ***********

// const imageEl = document.querySelector('.hero__image');
//     console.log('imageEl', imageEl);
// console.log(imageEl.src);

// magicBtn.addEventListener('click', () => {
//         imageEl.src =
//         'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto-compress&cs=tinysrgb&dpr=2&w=480';
//     imageEl.alt = 'Это новый котик';

//      const heroTitleEl = document.querySelector('.hero__title');
//     console.log(heroTitleEl.textContent);
//     console.log('heroTitleEl', heroTitleEl);
//     heroTitleEl.textContent = 'Я сладкий пирожочек!';
//     console.log(heroTitleEl.textContent);
// });

    //************РАБОТА С КНОПКАМИ*************/  

const actionsEl = document.querySelectorAll('.js-actions button');
// получаем массив кнопок
console.log(actionsEl); 
// => add,  в формате  action - ключ, add = значение
// console.log(actionsEl[0].dataset);
// edit  в формате просто ответа
// console.log(actionsEl[2].dataset.action);


//при клике на кнопку добывается ссылка на инпут
magicBtn.addEventListener('click', () => { 
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl);
//то, что введет пользователь в окне
    console.log(inputEl.value);
    //если что-то надо написать в окне
    inputEl.value = 'hello!';
});