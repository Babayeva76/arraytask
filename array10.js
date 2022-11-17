// //10. Sort the array in descending order in one of the ways: bubble sort, selection sort or insertion sort
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getNumberFromUser(message) {
  let userValue;
  let flag = false;
  do {
    if (flag) {
      alert("You have to enter number");
    }
    userValue = prompt(message);
    flag = true;
  } while (isNaN(userValue));
  return userValue;
}
const itemsCount = getNumberFromUser("please enter the number");
const array = [];
for (let index = 0; index < itemsCount; index++) {
  array[index] = getRndInteger(0, 101);
  console.log(array[index]);
}

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] > array[i]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
