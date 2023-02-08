// ; Задание 2.

// ; Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


const user = {
  name:"ivan",
  age: 10
}
let str = "name"

function func(user,str){
  console.log(user.hasOwnProperty(str))
}

// str = "city"

func(user,str)