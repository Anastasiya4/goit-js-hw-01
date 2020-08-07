'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let userInput = prompt('How much droids you want?');
userInput = Number(userInput);
 let totalPrice = pricePerDroid * userInput;
let leave = credits - totalPrice;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice > credits) {
  
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${leave} кредитов.`,
  );
}
