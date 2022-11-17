// //8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
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

// let len = array.length;
// let temp = 0;
// if (len % 2 == 0) {
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     temp = array[i];
//     array[i] = array[Math.floor(len / 2) + i];
//     array[Math.floor(len / 2) + i] = temp;
//   }
// } else {
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     temp = array[i];
//     array[i] = array[Math.floor(len / 2) + i + 1];
//     array[Math.floor(len / 2) + i + 1] = temp;
//   }
// }
// console.log(array);
