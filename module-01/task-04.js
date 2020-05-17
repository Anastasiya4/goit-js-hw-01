'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let userInput = prompt('How much droids you want?');
let totalPrice;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  userInput = Number(userInput);
  totalPrice = pricePerDroid * userInput;
  console.log(totalPrice);
}

let leave;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  leave = credits - totalPrice;
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${leave} кредитов.`,
  );
}
