// Задание 1:
//     Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
//     (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Метод isArray использовать можно.

function deepClone(initialObj) {
    var clonedObj = Array.isArray(initialObj)? [] : {};
    
    if (typeof initialObj !== 'object') {
        return initialObj;
    }

    for (var key in initialObj) {
        if (typeof initialObj[key] === 'object' && initialObj[key] == undefined) { 
            clonedObj[key] = null;
            continue;
        } else if (typeof initialObj[key] === 'number' && isNaN(initialObj[key])) { 
            continue;
        };
        clonedObj[key] = deepClone(initialObj[key]);
    };
    return clonedObj;
};

var initialObj = {
    // NaN: NaN,
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2)
console.log(initialObj);
console.log(clonedObj);

//   Задание 2:
//     Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
//     (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Для определения длины объектов
//     разрешается использовать метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).

function deepObjCompare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    };

    for (var key of Object.keys(obj1)) {
        var areObjects = isObject(obj1[key]) && isObject(obj2[key]);

        if (typeof obj1[key] === 'number' && isNaN(obj1[key])) { 
            continue;
        } else if (typeof obj1[key] === 'function') {
            return obj1[key].toString() === obj2[key].toString();
        } else if ( areObjects && !deepObjCompare(obj1[key], obj2[key]) || !areObjects && obj1[key] !== obj2[key]) {
            return false;
        };
    };
    return true;
};

function isObject(object) {
    return object != null && typeof object === 'object';
};

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}
var clonedObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}

console.log(deepObjCompare(initialObj, clonedObj));