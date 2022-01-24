// основы ООП: класс, экземпляр, интерфейс
/*функции конструкторы
именование
оператор new
свойство function.prototype*/
//сделана деструктуризация в момент приема аргумента
const Car = function ({ brand, model, price } = {}) {   //чертеж, конструктор          
    //без деструктуризации:
    // console.log(this);   // function ( config={} )
    this.brand = brand;    //this.brand = config.brand
    this.model = model;    //this.model = config.model
    this.price = price;    //this.price = config.price
    //1. если фн вызывается через new, создается пустой объект
//2, фн вызывается в контексте созданного объекта, т.е в this  записывается ссылка на него.
   /**ВСЕ, что объявлено ВНУТРИ конструктора, идет КОПИЕЙ на каждый экземплярю поэтому, все методы конструктора создаются в конструктор.prototype*/
};
 Car.prototype.changPrice = function (newPrice) {
        this.price = newPrice;
    };
const myCar = new Car({    //создали экземпляр 1 
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
    
});  
myCar.changPrice(28000);  //вызов метода на КОНКРЕТНОМ объекте
console.log(myCar);
console.log(`myCar.brand:`, myCar.brand);


const myCar2 = new Car({   //создали экземпляр 2
    brand: 'BMW',
    model: 'X6',
    price: 55000,
});  
console.log(myCar2);
 

/**
 * 
 * 3, в свойство this.__proto__ записывается ссылка на fn.prototype, т.е. fn.prototype это ПРОТОТИП будущего объекта(экземпляра)
 * 4, ссылка возвращается на место вызова new Car
 * СВОЙСТВО PROTOTYPE ЕСТЬ ТОЛЬКО У КОНСТРУКТОРА, А У ОБЪЕКТА ТОЛЬКО  __PROTO__!!! 
 * метод, записанный в  PROTOTYPE, работает на всех экземплярах
 */
{
    //не забываем ставить по умолчанию пустой объект, если вдруг будет вызов с пустыми параметрами.. тогда просто параметры будут undefined, а не ошибка кода..
    const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};
User.prototype.changePassword = function (newPassword) {
    this.password = newPassword;
    };
User.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
     };
const mango = new User({ email: 'mango@gmail.com', password: 111111 });
console.log(mango);
    console.log(`mango.email:`, mango.email);
    
mango.changePassword('222232');
console.log(mango);
    
mango.changeEmail('123@mail.ru');
console.log(`mango.email:`, mango.email);
    
}
/** СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ
 * доступны только на самом конструкторе
 * в статических методах нет this
*/
{ //например
    console.log(Math.round(5.2368));
    console.log(Math.PI);

    const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
    };
    
    const mango = new User({ email: 'mango@gmail.com', password: 111111 });
    console.log(mango);

    //этого свойства не будет доступно на экземплярах, т.к. в прототипе его нет.
    User.logInfo = function (obj) {
        console.log(obj);
     };
    console.dir(User);
    User.logInfo(mango);
};

// ----------- НОВЫЙ СИНТАКСИС!!!! -------------
/**КЛАССЫ
 * - объявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публичных свойств и методы классов
 * - геттеры и сеттеры
 */
{ //создание объекта 
    class Car { 
        static description = 'класс описывающий автомобиль';
        
        constructor({ brand, model, price } = {}) { 
            console.log(this);
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
       /**вместо 
        *  Car.prototype.changPrice = function (newPrice) {
        this.price = newPrice; };   *  внутри класса, после конструктора */  
        changePrice(newPrice) {
            this.price = newPrice;
        }
        updateModel(newModel) {
            this.model = newModel;
         }
    }
    //собственное свойство класса, не доступное экземплярам
    // Car.aaa = 123,   так писать не нужно, пишем через static, сразу под классом
    console.dir(Car);
    //создание экземпляра
    const carInstance = new Car({
        brand: 'Audi',
        model: 'Q3',
        price: 55000,
    });
    
    carInstance.changePrice('65500');
    carInstance.updateModel('Zaporogetc');
    console.log(carInstance);
    console.log(Object.getPrototypeOf(carInstance)===Car.prototype); //получение прототипа



};