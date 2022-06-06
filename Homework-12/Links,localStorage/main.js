// Практическое задание (продолжение предыдущего задания):
//   По кликам на ссылки второго абзаца проверять, если информации об этой ссылке нет в LS - записать ее туда. Ключом
//   должен быть текст ссылки, а значением объект вида { path: (путь ссылки) }. После записи изменить значение атрибута
//   href ссылки на "#" и выводить alert с уведомлением о том, что ссылка была сохранена.
//   Если же информация об этой ссылке уже записана в LS, выводить в alert путь ссылки из объекта из хранилища.
//   При загрузке страницы localStorage должен очищаться.

var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);


var myButton = document.getElementsByTagName('button')[0];

myButton.onclick = function() {
    var links = firstPar.children;
    links[0].classList.toggle('changed');
    links[1].classList.toggle('changed');
};

secondPar.addEventListener('click', changeLinks);


function changeLinks(event) {
    var links = secondPar.children,
        target = event.target;
    
    for (var i = 0; i < links.length; i++) {
        if (target.tagName === 'A' && target === links[i]) {
            event.preventDefault();
            links[i].classList.toggle('changed');

            if (localStorage.getItem(links[i].textContent) === null) {
                localStorage.setItem(links[i].textContent, JSON.stringify({ path:links[i].getAttribute('href')}));
                links[i].setAttribute('href','#');
                alert('Информация о ссылке сохранена');
            } else {
                alert(Object.values(JSON.parse(localStorage.getItem(links[i].textContent)))); //[0]
            };
        };
    };    
};

window.onload = function() {
    localStorage.clear();
}