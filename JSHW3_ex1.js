// задание 1. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const basket = {
  apples: 3, 
  oranges: 20,
  watermelons: 1 };

function checkBasket(obj){
  for(let key in obj){
     if (obj.hasOwnProperty(key)){
       console.log(`${key} - ${obj[key]}`);
     }
    }
     
};

checkBasket(basket);