const navEl = document.querySelector('.site-nav');
console.log(navEl);
// const firstNavItemEl = navEl.querySelector('.site-nav__item');
// console.log(firstNavItemEl);

//первый ребенок, кот. является узлом
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
//последний ребенок, кот. является узлом
const lastNavItemEl = navEl.lastElementChild;
console.log(lastNavItemEl);
//список вех детей
console.log(navEl); //смотри выше
console.log(navEl.children);

