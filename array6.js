// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// function getNumberFromUser(message) {
//   let userValue;
//   let flag = false;
//   do {
//     if (flag) {
//       alert("You have to enter number");
//     }
//     userValue = prompt(message);
//     flag = true;
//   } while (isNaN(userValue));
//   return userValue;
// }
// const itemsCount = getNumberFromUser("please enter the number");
// const array = [];
// for (let index = 0; index < itemsCount; index++) {
//   array[index] = getRndInteger(0, 101);
//   console.log(array[index]);
// }

// reverseArray(array, itemsCount);

// function reverseArray(array) {
//   let length = array.length;
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]];
//   }
// }
// console.log(array);
