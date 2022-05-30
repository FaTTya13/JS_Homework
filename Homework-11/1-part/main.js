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
    
    if (target.tagName == 'A' && target == links[0]) {
    event.preventDefault();
    links[0].classList.toggle('changed');
    alert(links[0]);
    };
    if (target.tagName == 'A' && target == links[1]) {
        event.preventDefault();
        links[1].classList.toggle('changed');
        alert(links[1]);
        };
}


// По клику на имеющуюся кнопку (получать ее по тегу) найти все дочерние ссылки у первого абзаца с помощью возможностей
// DOM-навигации и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление
// css-класса). Установить событие клика на второй абзац (!!!) другим способом. Если пользователь нажимает на ссылки
// 2-го абзаца, необходимо отменить им поведение по-умолчанию и вывести alert со значением атрибута href ссылки.