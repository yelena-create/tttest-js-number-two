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
console.log(navEl.children[1]);
const linkEl = document.querySelectorAll(".site-nav__link");
console.log(linkEl);
console.log(linkEl[0]);
console.log(linkEl[0].href);

// Вы можете использовать следующие свойства для навигации между узлами.

// elem.parentNode - выберет родителя elem
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
// elem.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
// elem.nextSibling - выберет элемент "справа" от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент "справа" от elem (его предыдущего соседа)