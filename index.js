/*Write a JavaScript program that compare two objects to determine if the first one contains equivalent property values to the second one.*/
const a = {
  name: "melissa",
  univ: "usthb",
  club: "MC",
};
const b = {
  lastName: "MEBARKI",
  name: "melissa",
};
const c = {
  name: "melissa",
  univ: "usthb",
};

const verification = (object1, object2) => {
  for (key in object2) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

console.log(verification(a, b));
console.log(verification(a, c));

// Write a JavaScript function to find the same elements from two arrays

function difference(array1, array2) {
  let same = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        same.push(array1[i]);
      }
    }
  }

  return same;
};
var array1 = [1, 2, 3];
var array2 = [100, 2, 1, 10];
console.log(difference(array1, array2));
