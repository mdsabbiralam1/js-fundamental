var danisPrice = 50;
var butterBreadPrice = 25;
var toastBiscutPrice = 10;
var myBudget = 26;
var packeWell = false;
//nasted conditon
/*
if (danisPrice < myBudget) {
               console.log('danish kheye danish desh e jabo');
}
else if (butterBreadPrice <= myBudget) {
               console.log('butter bread khabo cha diye');
}
else if (toastBiscutPrice < myBudget) {
               console.log('toast biskut diye cha khyaoyar mojai alada');
}
else{
               console.log('batasha diye cha khamo..!!!')
}
*/

// nasting condition
if (butterBreadPrice < myBudget) {
               if(packeWell == true) {
                              console.log('butter Bread Khabo');
               }
               else{
                              console.log('butter breat khabo na. kenona amar agei machi ordekh kheye felse..!');
               }
}