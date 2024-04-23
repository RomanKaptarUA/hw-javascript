const age = 14;
console.log(age);

const use = "Roman";
console.log(use);

const isStudent = true;
console.log(isStudent);

const myString = "цитата";
console.log(myString);

const myNumber = 4;
const a = myNumber + 10;
console.log(a);

const myNull = null;
console.log(myNull);

const user = prompt("Вкажіть ваше ім'я");
alert(`Вітаємо вас, ${user}`);

const userName = confirm('Чи приймаєте вм умови?');
if (userName === true) {
    alert("Дякую")
}

else {
    alert("дію відмінено")
}

alert("Небезпечна дія");
const danger = confirm('Дія небезпечна, ви точно підтверджуєте?');
if (danger === true) {
    alert("Дякую за підтвердження")
}

else {
    alert("дію відмінено")
}