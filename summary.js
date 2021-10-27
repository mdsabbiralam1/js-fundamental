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