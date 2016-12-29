//Reverse a given string

function reverseString(str) {
  var stringArray = str.split("");
  stringArray.reverse();
  str = stringArray.join("");
  return str;
}

reverseString("hello");