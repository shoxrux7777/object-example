let firstname = prompt("Ismingizni kiriting... ");
let surname = prompt("Familiyangizni kiriting... ");
let age = prompt("Yoshingizni kiriting... ");
let study = prompt("Qayerda o'qishingizni kiriting... ");

let user = {};
user.name = firstname;
user.surname = surname;
user.age = age;
user.study = study;

console.log( "Sizning ismingiz" + " " + user["name"] + "," + "familiyangiz " + user["surname"] + "," + "yoshingiz" + " " + user["age"] + " da," + "siz" + " " + user["study"] + "da o'qiysiz.");