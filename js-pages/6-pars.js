//свойство innerHTML      чтение и запись

const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
// = Это заголовок

//выдает значение между тегами в виде строки, включая вложенные теги
console.log(titleEl.innerHTML);
 // = Это <span>заголовок</span>
 //МОЖНО но не нужно ДОБАВИТЬ В КОНЕЦ, НЕ ИЗМЕНЯЯ!!! очень затратно и деструктивно
 titleEl.innerHTML += "<a href = ''>Это ссылка</a>";
console.log(titleEl.innerHTML);
 
titleEl.innerHTML = "<a href = ''>Это ссылка</a>";
console.log(titleEl.innerHTML);


//вставка разметки с insertAdjacentHTML(position, string)
// 'beforebegin' - перед element, на который вызвано
// 'afterbegin' - внутрь element, в самое начало контента
// 'beforeend' - внутрь element, в самый конец контента
// 'afterend' - после element, на который вызвано

//http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
titleEl.insertAdjacentHTML('beforebegin', "<a href = '' class='title__link'>Это посылка</a>");












