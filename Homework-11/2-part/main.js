var table = document.getElementsByTagName('table')[0],
    button = document.getElementById('button'),
    cells = document.getElementsByTagName('td');

button.addEventListener('click', createRow);
table.addEventListener('click', addInput);
table.addEventListener('keypress', addInput);

function createRow() {
    var newRow = table.insertRow(0),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2);
};


function addInput(evt) {
    var target = evt.target,
        input = document.createElement('input');
        eliminate = target.tagName == 'TD' && target.className != 'button' &&
        target.className != 'filled';

    if (evt.key === "Enter") {
        evt.target.blur();
    }

    if (eliminate) {
        input.setAttribute('type', 'text');
        input.setAttribute('value', '');
        target.classList.add('filled')
        target.appendChild(input);
        input.focus();
    };
};

