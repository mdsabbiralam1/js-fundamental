var tableLength = 45;
var tourDastination = ['coxs-bazer', 'nepal', 'Butan'];

var batteryIndex = tourDastination.indexOf('Butan');
// console.log(batteryIndex);

var thiredDastination = tourDastination[2]
// console.log(thiredDastination);

var butanIndex = tourDastination.indexOf('Butan');
console.log(butanIndex);

tourDastination[1] = 'Singapore';
// console.log(tourDastination);

tourDastination.push('London');
// console.log(tourDastination);

tourDastination.pop();
console.log(tourDastination);

// nasted condition
if (tourDastination[2] == 'nepal'){
               console.log('nepal jamu pahar dekhmo');
}
else if (tourDastination[2] == 'Butan'){
               console.log('Butan jamu r musty krmo');
}
else if (tourDastination == 'London') {
               console.log('Londone jeye shylethi meye biye kormo');
}
else {
               console.log('ghore bose bose machi marmo');
}

var eggPrice = 32;
var myBudget = 31;

if (eggPrice <= myBudget) {
               console.log('aj dim khamu 4 ta');
}
else if (eggPrice >= myBudget) {
               console.log('lebu diye dal vat khabo');
}


// reacap

// for loop:
for (i = 51; i < 80; i = i+2){
               console.log(i);
}

// var myArray = [];
// for (var i = 1; i < 10; i += 2){
//     myArray.push(i);
// }