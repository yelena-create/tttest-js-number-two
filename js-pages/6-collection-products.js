//импортируем данные из файла
import products from "../js-pages/products.js";
console.log(products);
/*нужно собрать  такую разметку 
 <article class = "product" >
<h2 class = "product__name">Название</h2>
<p class = "product__name">Описание</p>
<p class="product__price">Цена: 1111 кредитов</p>
</article> */

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = products.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = products.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${products.price} кредитов`;
// priceEl.classList.add('product__price');
// // console.log(nameEl);
// // console.log(descrEl);
// // console.log(priceEl);
// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);


//пишем функцию для создания карточки продуктов,+деструктуризация
//выносим создание одного элемента в функцию
const makeProductsCard = ({ name, description, price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    // nameEl.textContent = products.name;
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

    const descrEl = document.createElement('p');
    // descrEl.textContent = products.description;
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');

    const priceEl = document.createElement('p');
    // priceEl.textContent = `Цена: ${products.price} кредитов`;
    priceEl.textContent = `Цена: ${price} кредитов`;
    priceEl.classList.add('product__price');

    productEl.append(nameEl, descrEl, priceEl);

        return productEl;
};
//созданный элемент 
console.log(makeProductsCard(products[1]));

//делаем много карточек
const elements = products.map(makeProductsCard);
console.log(elements);

//теперь получаем ссылку куда и  добавляем в документ непосредственно
const productContainerEl = document.querySelector('.js-products');
//теперь в подготовленный элемент распыляем массив карточек
productContainerEl.append(...elements);


