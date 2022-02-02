const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
//add
navEl.classList.add("super-cool", "qweqwe", "scuby-doo");
console.log(navEl);
//delete
navEl.classList.remove('super-cool');
console.log(navEl);
//toggle переключатель, если класс есть - снимет, если нет - добавит 
const magicBtn = document.querySelector('.magic-btn');
magicBtn.addEventListener('click', () => { 
    navEl.classList.toggle('qweqwe');
    //замена replace
    navEl.classList.replace('scuby-doo', 'doggy');
        //есть ли класс на элементе
        navEl.classList.contains('qweqwe');
    });
  //есть ли класс на элементе? выводит true/false
console.log(navEl.classList.contains('qweqwe'));  
console.log(navEl.classList.contains('super-cool'));  
//мы получили ссылку на текущую страницу
const currentPageUrl = '/portfolio';
//надо найти на нее ссылку и поменять класс !! В шаблонной строке, буквально: найди мне такую строку!!! такой класс с таким атрибутом[]
const linkEl = document.querySelector(`.site-nav__link[href = "${currentPageUrl}"]`);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');