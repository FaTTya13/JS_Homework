// ДОМАШНЕЕ ЗАДАНИЕ 10
//   Задание 1:
//     Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.

function changeArray(names) {
  return names.map(function(name) {
    return name = {'name' : name};
  });
};

changeArray(['Vasya1', 'Vasya2', 'Vasya3']);

//   Задание 2:
//     Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
//     Для решения использовать перебирающий метод массивов (не метод join).

function f(array) {
    var str = 'Текущее время';
    array.map(function(item) {
        str += ' : ' + item;
    });
      return str;
};

function f(arr) {
    var str = 'Текущее время : ',
        time = arr.reduce(function(item, current) {
        return item += ' : ' + current;
    }), str;
    return str + time;
};

f(['00', '13', '24']);
    
//   Задание 3:
//     Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
//     должно быть "топорным".

var vowels = ['a', 'e', 'i', 'o', 'u'];

function getVowels(word) { 
    var word = word.toLowerCase().split(''),
        sum = 0;
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (vowels[i] === word[j]) {
                sum++;
            };
        }; 
    };
    return sum;
};

getVowels('Programmer'); // 3

//   Задание 4:
//     Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
//     восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
//     вопросительным знакам - убрав их).
//     Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
//     запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
//     в методе split.

function countSentencesLetters(text) { 
    var text = text.split('');
    for (let i = 0; i < text.length; i ++) {
        if (text[i] === '?' || text[i] === '!' || text[i] === '.') {
            text[i] = '/';
        };
    };
    text = text.join('').split('/');

    var sortedTexts = text.filter(function(sortedText) { 
        return sortedText.length >= 2;
    });
    
    sortedTexts.map(function(changeText) {
        console.log(changeText + ': Letters quantity is: ' + clearText(changeText).length);
    });

    function clearText(text) {
        var erase = ',!_- :;.';
        return text.split('').filter(function(char) {
            return erase.indexOf(char) === -1;
        }).join('');
    };
    
};

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

//     Функция должна работать следущим образом (потестировать на данном тексте):
//       countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
//       // Привет, студент: Letters quantity is: 13
//       // Студент: Letters quantity is: 7
//       // Как дела, студент: Letters quantity is: 14

//   Задание 5 *:
//     Написать функцию, которая будет находить в переданном ей тексте первое наиболее часто повторяемое слово и возвращать
//     информацию вида:
//       "Максимальное число повторений у слова "привет" - 8"
//     Для удобного разделения текста на слова сразу по нескольким знакам препинания - разрешается использовать регулярное
//     выражение в методе split.

// function mostWanted(mostWanted) {
//     const regex = /[!"#$%&'()*+,-./:; <=>?@[\]^_`{|}~]/g
//     var words = mostWanted.toLowerCase().split(regex);
    
//     var sortedWord = words.filter(function(word) { 
//         return word.length >= 1;
//     });
//     console.log(sortedWord)
//     console.log('Максимальное число повторений у слова' + maxWord + '-' + 'number')
    
// };

// console.log(mostWanted(' Раз привет, раз - привет. раз : привет'));
