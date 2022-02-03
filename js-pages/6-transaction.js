import transactionHistory from './trrransaction.js';
{ 
    //  <tr>
    //       <td>ID транзакции</td>
    //       <td>Сумма</dh>
    //       <td>Дата</td>
    //       <td>Кто</td>
    //       <td>Тип транзакции</td>
    //       <td>Имя счета</td>
    //       <td>Номер счета</td>
    //     </tr>
}
const makeTransactionTableRowMarkup = ({id, amount, date, business, type, account, name}) => { 
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</dh>
        <td>${date}</td>
        <td>${business}</td>
        <td>${type}</td>
        <td>${name}</td>
        <td>${account}</td>
    </tr>`

};

console.log(transactionHistory);
//fn которая получает 1 элемент массива
console.log(makeTransactionTableRowMarkup(transactionHistory[0]));
//новая переменная=массив.мап(функция построения). т.к. получаем массив, а вставить надо строку, добавляем join("") - превращаем массив в строку.


const makeTransactionTableRows = transactionHistory
    .map(makeTransactionTableRowMarkup)    //получаем массив
    .join('');                            //превращаем в строку
console.log(makeTransactionTableRows);
//теперь можно и в документ вставлять:)
const tableEl = document.querySelector('.js-transaction-table');
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);