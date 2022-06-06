// Задание 1:
// Добавить на страницу два поля для ввода - X и Y и кнопку "Create".
// Если хотя бы одно из полей пустое - кнопка дизэйблится (делать по keyup).
// Поля должны принимать только целые числа от 1 до 10, в противном случае должно выводиться сообщение об ошибке
// (делать по click).
// По клику на кнопку должна отрисоваться шахматная доска с размерами X по горизонтали и Y по вертикали. Логика
// разукрашивания ячеек не должна храниться в css (не использовать nth-child и т.д.).
// При введении значений X и Y заново таблица должна корректно перерисоваться.
// По клику на любое поле доски - цвета всех полей должны изменяться на противоположные.

var inputs = document.getElementsByTagName('input'),
    firstInput = inputs[0],
    secondInput = inputs[1],
    container = document.getElementsByClassName('container')[0],
    myBtn = document.getElementsByTagName('button')[0];
    myBtn.disabled = true;

firstInput.insertAdjacentHTML('beforeBegin', "X:");
secondInput.insertAdjacentHTML('beforeBegin', "Y:");

firstInput.addEventListener('keyup', stateChangeBtn);
secondInput.addEventListener('keyup', stateChangeBtn);
myBtn.addEventListener('click', getNumbers);

function stateChangeBtn() {
    var check = firstInput.value !== "" && secondInput.value !== "";
    if (check) {
        myBtn.disabled = false; 
    }
};

function isInt(value) {
    if (isNaN(value) || value < 1 || value > 10 || value % 1 != 0) {
        return true;
    } else false;
};

function getNumbers() { 
    if (isInt(+firstInput.value)) {
        alert('Введите корректное значение в поле X - целое число от 1 до 10');
        firstInput.value = '';
    } else if (isInt(+secondInput.value)) {
        alert('Введите корректное значение в поле Y - целое число от 1 до 10');
        secondInput.value = '';
    } 
    if (!isInt(+firstInput.value) && !isInt(+secondInput.value)) {
        createChessTable();
        firstInput.value = '';
        secondInput.value = '';
    };
};

function createChessTable() {
    var table = document.createElement('table'),
        tableBody = document.createElement('tbody');
    
    table.setAttribute('border', '1');
    
    container.getElementsByTagName('table')[0] === undefined? createTable() : refreshTable();

    function createTable() {
        container.appendChild(table);           
        table.appendChild(tableBody);
        var isRowWhite = true;

        for (var i = 0; i < +secondInput.value; i++) {
           var isWhiteCell = isRowWhite;
           var tr = document.createElement('tr');

           isRowWhite = !isRowWhite;

           tableBody.appendChild(tr);
           var cells = container.getElementsByTagName('td');

           for (var j = 0; j < +firstInput.value; j++) {
               var td = document.createElement('td');
               if (isWhiteCell) {
                td.style.width = '50px';
                td.style.height = '50px';
                td.style.backgroundColor = 'white';
               } else {
                td.style.width = '50px';
                td.style.height = '50px';
                td.style.backgroundColor = 'black';
               }
               isWhiteCell = !isWhiteCell;
               tr.appendChild(td);      
           };
        };
    };

    function refreshTable() {
        var table = container.getElementsByTagName('table')[0];
        table.remove();
        createTable();
    };

    table.addEventListener('click', changeColor);

    function changeColor(e) {
        var target = e.target;
        
        if (target.tagName == 'TD') {
            var cells = container.getElementsByTagName('td');
            for (var i = 0; i < cells.length; i++) {
               if (cells[i].style.backgroundColor === 'white') {
                cells[i].style.backgroundColor = 'black';
               } else {
                cells[i].style.backgroundColor = 'white';
               }
            };
        };
    };
};