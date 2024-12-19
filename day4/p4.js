let str = "HELLO World";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
    result += String.fromCharCode(str.charCodeAt(i) + 32);
  } else {
    result += str[i];
  }
}

console.log(result);
