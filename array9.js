//9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
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

// for (var i = 0; i <= array.length - 1; i++) {
//   for (var j = 0; j < array.length - i - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       var temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

// console.log(array);
