//   Задание 1:
//     Добавить на страницу кнопку "Загрузить список пользователей".
//     По клику на нее осуществляется AJAX (GET) запрос на https://reqres.in (List Users).
//     В случае успешного получения данных:
//       - ДИНАМИЧЕСКИ добавить на страницу вкладки "Пользователь 1", "Пользователь 2" и т.д.
//       (в соотв. с количеством пользователей)
//       - сделать первую вкладку активной и показать под ней блок с информацией о пользователе
//       - вкладки должны иметь возможность переключаться и отображать соответствующие данные
//       - полученные данные должны записываться в LocalStorage *
//       - по клику на кнопку должна происходить проверка, если данные есть в LocalStorage, не отправлять AJAX запрос, а
//         сразу отрисовывать их *
//     В случае ошибки получения данных (протестировать можно, изменив url запроса как в примере с урока):
//       - отрисовать на странице сообщение о том, что данные не получены, в произвольном виде
//     Перед отправкой ОБЯЗАТЕЛЬНО (!!!) порефакторить код и протестировать ваше приложение на работоспособность и
//     максимально на отсутствие багов.

var button = document.getElementsByTagName('button')[0];
var content = document.getElementsByClassName('main-block')[0];

button.addEventListener('click', getUsersData);

function getUsersData() {
    var localResponse = localStorage.getItem('response');
    if (localResponse) {
        console.log('localStorage exist');
        showInfo(localResponse);
        button.disabled = true;
    } else {
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        
        xhr.send();
            
        xhr.onload = function() {
            var statusType = Math.round(this.status/100);
            
            if (statusType === 2) {
                showInfo(this.response);
                localStorage.setItem('response', this.response);
            } else {
                var infoBlock = document.getElementsByClassName('info-block')[0];
                var errorDiv = document.createElement('div');

                errorDiv.classList.add('error');
                errorDiv.innerHTML = '<h2>Не удалось загрузить список пользователей!</h2>';
        
                infoBlock.append(errorDiv);    
            };
        };
            
        xhr.onerror = function() {
            var infoBlock = document.getElementsByClassName('info-block')[0];
            var errorDiv = document.createElement('div');
            
            console.error('Error: Statys type - 0');
            errorDiv.classList.add('error');
            errorDiv.innerHTML = '<h2>Не удалось подключиться!</h2>';
    
            infoBlock.append(errorDiv);  
        };
        
        xhr.onloadend = function() {
            console.log('Response finished');
            button.disabled = true;
        };
    };
};

function showInfo(from) {
    var users = JSON.parse(from).data;
    var infoBlock = document.getElementsByClassName('info-block')[0];
    var usersTabs = document.getElementsByClassName('users-tabs')[0];

    users.map(function(user) {      
        var userPage = document.createElement('a');

        userPage.classList.add('userpage');
        userPage.innerHTML = 'User ' + (user.id - users.length);

        usersTabs.append(userPage);

        var userBlock = document.createElement('div');
        userBlock.classList.add('userblock');
    
        infoBlock.append(userBlock);

        var img = document.createElement('img');
        
        img.classList.add('img');
        img.setAttribute('src', user.avatar);

        userBlock.append(img);

        var firstPar = document.createElement('p');
        var secondPar = document.createElement('p');

        firstPar.innerHTML = '<em>First Name: '  + user.first_name + '</em>';
        secondPar.innerHTML = '<em>Last Name: '  + user.last_name + '</em>';

        userBlock.append(firstPar);
        firstPar.append(secondPar);
    });

    usersTabs.firstChild.classList.add('activeTab');

    usersTabs.addEventListener('click', showUser);

    var userBlocks = infoBlock.getElementsByTagName('div');
    infoBlock.firstChild.classList.add('activeBlock');

    function showUser(e) {
        var target = e.target;

        if (target.tagName === 'A') {
            for (var i = 0; i < users.length; i++) {
                usersTabs.children[i].classList.remove('activeTab');
                userBlocks[i].classList.remove('activeTab');
                
                if (usersTabs.children[i] == target ) {     // console.log(usersTabs.children[i] == target, i);
                    userBlocks[i].classList.add('activeBlock');
                } 
                else {
                    userBlocks[i].classList.remove('activeBlock');
                }
            };
            target.classList.add('activeTab');
        };
    };
};