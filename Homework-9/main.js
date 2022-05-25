// Задание 1:
// Переписать задачу с использованием перебирающего метода массивов:

function filterNumbersArr(numbers) {
  var newArr = numbers.filter(function(num) {
        return num > 0; 
  });
      return newArr;
  };
  
  filterNumbersArr([-1, 0, 2, 34, -2, 5, -3, 0, 16]);

// Задание 2:
// Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

function findPositive(arr) {
  var positive = arr.filter(function(el) {
    return el > 0;
  })[0];
  return positive;
};

function findPositive(arr) {
  var positive = arr.find(function(el) {
    return el > 0;
   });
   return positive;
};

// Либо такой вариант ?
var arr = [-3, -2, 1, 10, -2, 1];

var findPositive = arr.find(function(el) {
    return el > 0;
   });

findPositive;

findPositive([-3, -2, 1, 10, -2, 1]);

// Задание 3:
// Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
// Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).

function isPalindrome(word) {
    var word = word.toLowerCase(),
      reverseWord = word.split('').reverse().join('');

      return word === reverseWord;
};

isPalindrome('ШалаШ'); // true
isPalindrome('привет'); // false

// Задание 4:
// Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами
// Регистр в словах учитываться не должен.

function areAnagrams(word1, word2){
  var word1 = word1.toLowerCase().split(''),
      word2 =  word2.toLowerCase().split('');

  return (word1.sort().join('') == word2.sort().join(''));
};

    areAnagrams('кот', 'Отк'); // true
    areAnagrams('кот', 'атк'); // false
    areAnagrams('кот', 'отко'); // false

// Задание 5:
// Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

function divideArr(arr, divider) {
  var result = [];
      
  while (arr.length > divider) {
    result.push(arr.splice(0, divider));
  }

  result.push(arr);
  return result;
}


divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Задание 6 *:
// Написать функцию, определяющую, является ли переданное в нее число степенью двойки.

function checkPowerOf2(number) {
  var n = 1;
  while (n <= 50) {
    if (number === 1) {
        return true;
      };
    if (number === Math.pow(2,n)) {
      return (number + ' является ' + n + ' степенью числа 2');
    } else if (number !== Math.pow(2,n) && n == 50) {
        return (number + ' не является степенью числа 2');
    }
      n++; 
  };
};

checkPowerOf2(8); // true for [2,4,8,16,32,64,128,256]