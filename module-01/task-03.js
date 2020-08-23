'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let input = prompt('Password');
let message = '';
if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
alert(message);
