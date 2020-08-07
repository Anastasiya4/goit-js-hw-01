'use strict';

let price;
let userCountry = prompt('Plese enter your country');

switch (userCountry.toLowerCase()) {
  case 'КИТАЙ':
    price = 100;
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов.`);
    break;
  case 'ЧИЛИ':
    price = 250;
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов.`);
    break;
  case 'АВСТРАЛИЯ':
    price = 170;
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов.`);
    break;
  case 'ИНДИЯ':
    price = 80;
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов.`);
    break;
  case 'ЯМАЙКА':
    price = 120;
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов.`);
    break;
  default:
    alert('В вашей стране доставка не доступна.');
    break;
}
