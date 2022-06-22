// Задание 1:
// Имеется следующий объект - {a: 1, b: 2, c: 3, d: 4}. Необходимо сделать так, чтобы в переменные a и b записались
// соответствующие значения, а все, что осталось - в объект obj.

{
let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
};

// Задание 2: 
// Запросить у пользователя имя и сохранить его в переменную.
// Создать объект со свойством name, куда записать короткой записью значение имени пользователя, и методом sayHi,
// который будет возвращать строку вида:
//   "Hi, (имя пользователя)!"
// Имя пользователя получать уже из объекта.
// Проверить работу метода. Убедиться в уместном использовании способов задания переменной.

{
let name = prompt('Введите Ваше имя');
const obj = {name};
obj.sayHi = function() {
    return `Hi, ${this.name}!`;
};
obj.sayHi();
};

// Задание 3:
// Написать функцию, которая будет принимать параметры x, y, z.
// При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
// X и y получаем из свойств переданного в функцию объекта a и b. У z значение по-умолчанию должно быть 1.
// Функция должна возвращать результат возведения в степень y числа x, умноженный на z.
// Валидацию опустить.

{
function func({a: x, b: y}, z = 1) {
    return x ** y * z;
};
func({a: 2, b: 3}, 2);
};

// Задание 4:
// Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
// name и age и вернуть строку вида:
//   "Hello, I'm (имя) and I'm (возраст) years old."
// Не использовать деструктуризацию.

{
const arr = ['Ilya', 25];
function func(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
};
func(...arr);
};

// Задание 5:
// Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
// Вывести в консоль числа последовательно.

{
function func(...arr) {
    for (let value of arr){
        console.log(value);
    };
};
func(1,2,3,4,5,6,7,8,9);
};

// Задание 6:
// Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск
// элемента в массиве.
//   function countVowelLetters(text) {
//       text = text.toLowerCase().split('');

//       var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
//           counter = 0;

//       for (var i = 0; i < vowelLetters.length; i++) {
//           for (var j = 0; j < text.length; j++) {
//               vowelLetters[i] === text[j] && counter++;
//           }
//       }

//       return counter;
//   }

//   countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

{
function countVowelLetters(text) {
    let chars = [...text.toLowerCase()];
    let vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    counter = 0;
    chars.forEach(function(item) {
      vowelLetters.includes(item) && counter++
    })
    return counter;
};
console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));
};

// Задание 7:
// Написать функцию, принимающую массив объектов вида:
//   [
//       {name: 'Vasya Pupkin', age: 25},
//       {name: 'Ivan Petrov', age: 30},
//       {name: 'Fedor Ivanov', age: 42}
//   ]
// и возвращающую объект вида:
//   {
//       Пользователи младше 40: [
//           {name: 'Vasya Pupkin', age: 25},
//           {name: 'Ivan Petrov', age: 30}
//       ],
//       Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
//   }
// Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.

{
    users = [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
];

function func(users) {
    const obj = {
        'Пользователи младше 40': users.filter(user => user.age < 40),
        'Пользователь с именем Федор': users.find(user => user.name.includes('Fedor'))
    };
    return obj;
};
console.log(func(users));
};

// Задание 8:
// Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
//   [
//       {Пользователь 1: 'Вася'},
//       {Пользователь 2: 'Петя'}
//   ]

{
function func(users) {
  const newUsers = [];
  let i = 0;
  users.map(user => {
    user = {['Пользователь ' + ++i]: user};
    newUsers.push(user);
  })
  return newUsers;
};    
console.log(func(['Вася','Петя','Ваня']));
};


// Задание 9:
// Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
//   [
//       {name: 'Vasya'},
//       {name: 'Piotr', age: 25},
//       {salary: '2000$'}
//   ]
// необходимо преобразовать в
//   {
//       name: 'Piotr',
//       age: 25,
//       salary: '2000$'
//   }
// Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.

{
const users = [
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
];

function func(users) {
   return users.reduce( (acc, user)  => {
        return Object.assign(acc, user);
    }, {})
}
console.log(func(users));
};

// Задание 10:
// Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.

{
class Animal {
    constructor (name) {
        this.name = name;
        this._foodAmount = 50;
    }
    _formatFoodAmount () {
        return this._foodAmount + ' гр.';
    }
    dailyNorm (amount) {
        if (!arguments.length) return this._formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return console.log('Недопустимое количество корма.');
        }

        this._foodAmount = amount;
    }
    feed () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    }
};

class Cat extends Animal {
    feed () {
        super.feed();
        console.log('Кот доволен ^_^');
        return this;
    }
    stroke () {
        console.log('Гладим кота.');
        return this;
    }
};

let barsik = new Cat('Барсик');

barsik.dailyNorm(33);
console.log(barsik._foodAmount);
barsik.feed().stroke().stroke().feed();
}

// Задание 11:
// Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
// каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
// Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
// В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.

{
function createPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (x > y) {
            [x, y] = [y, x];
        };
        if (Number.isInteger(x) && Number.isInteger(y)) {
            let timer = setInterval(() => {
                for (let i = x; i <= y; i++) {
                    console.log(i)
                    if (i === y) {
                        clearInterval(timer);
                        resolve(i);
                    };
                };
            }, 0);
        } else reject('есть не целое число');
    });
};

createPromise(5,1)
.then(i => console.log(`Крайнее число: ${i}`))
.catch(error => console.log(`Возникла ошибка в промисе: ${error}`))
}

// let users = [
//     {name: 'Vasya', age: 25},
//     {name: 'Piotr', age: 10}
// ];

// function func(users) {
//     users.reduce((acc, user) => {
//         if (user.age < 18) delete user
//     }, []);
// };

// func(users);

// // результат : 
// // let users = [
// //     {name: 'Vasya', age: 25, title: 'Vasya - 25'}
// // ];