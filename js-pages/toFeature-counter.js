    // сам находит и привязывает элементы, которые ему нужны >
const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1 } = {}) {
    // this._rootSelector = rootSelector;
    this._value = initialValue;  //privat
    this._step = step;

    this._refs = this._getRefs(rootSelector);
    
    this._bindEvents();
    this.updateValueUi(); //если указано другое начальное значения, здесь вызывается и должно сразу обновляется интерфейс

};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);  //по id найдет элемент             //не в документе, так как есть указание на место
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');
     // в каждом экземпляре лежит ссылка на див-контейнер кантер-1 или -2.
    return refs;
};

CounterPlugin.prototype._bindEvents = function () { 
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log(`CounterPlugin.prototype._bindEvents=>this`, this);
        this.increment();
        this.updateValueUi();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        console.log(`CounterPlugin.prototype._bindEvents=>this`, this);
        this.decrement();
        this.updateValueUi();

    });
};

CounterPlugin.prototype.updateValueUi = function () {
    this._refs.value.textContent = this._value;//обновление значения счетчика
 };

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
 };
CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};


const counter1 = new CounterPlugin({rootSelector: '#counter-1', step:10,initialValue : 100});// если задано другое начальное значение, надо его сразу обновить-инициализировать, значит метод должен вызваться в конструкторе
console.log(`counter1`, counter1);

const counter2 = new CounterPlugin({rootSelector: '#counter-2', step:5});
console.log(`counter2`, counter2);

/**во время вызова функции плагин, прямо в ее теле вызывается метод для получения ссылок .консоль лог в прототайп-гетРефс  вернет список ссылок на все объекты плагина.
 * строка  18 (const refs)
 * 
 * this._getRefs - исправляем на .. 
 * return refs в плагин прототайп гет рефс.
 * 
 * вызываем метод CounterPlugin.prototype._getRefs, 
 * конст рефс - создает объект ссылок на все элементы и интерфейсы   текущего экземпляра плагина,
 * и просто ретурн их
 * а здесь (this.refs = this._getRefs) получив ссылку на контейнер вызываем, и получаем ссылки реф.
 * добавив рефс квериселектор, получаем ссылки на кнопки каждого экз. благодаря функции гетрефс, которая вызывается во время вызова конструктора.
 * привязываем события..
 * 
 * 
*/