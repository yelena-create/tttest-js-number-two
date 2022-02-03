
//Создаем заголовок
//элемент создается сначала в памяти
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы';
console.log(titleEl);
 //вставка узла appendChild(elem)  - добавит в конец родителя
document.body.appendChild(titleEl);

//создаем изображение https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//valais-alpine-mountains-glacier
const imgEl = document.createElement('img');
imgEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imgEl.alt = 'valais-alpine-mountains-glacier';
imgEl.width = 640;
console.log(imgEl);
document.body.appendChild(imgEl);

//создаем и добавляем новый пункт меню

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
console.log(navItemEl);
    
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';
console.log(navLinkEl);

//вкладываем ссылку в лишечку.

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);
//получаем ссылку на ul
const navEl = document.querySelector('.site-nav');
//добавляем весь сборный элемент в конец
navEl.appendChild(navItemEl);
// вставка узла insertBefore(elem, nextSibling) - перед nextSibling. получаем ссылку на тот элемент, перед которым нужно вставить
console.log(navEl.firstElementChild);
console.log(navEl.children[1]);// так можно получить доступ к любому порядковому номеру списка
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
//пробуем вставить перед вторым элементом
navEl.insertBefore(navItemEl, navEl.children[1]);

//вставка картинки некорректно - дергаем ДОМ несколько раз
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imgEl);
//вставка корректно - за один раз: prepend(...elem)-перед, append(...elem)-после.
//в том порядке, как надо вставить!!!
heroEl.append(titleEl, imgEl);

 