const peopleName = "ABC";

// Ternary Operator  --> digunakan saat value true or false
const greetings =
  peopleName === "ABC" ? "Yes, my name is ABC" : `No, I don't know who I am!`;

console.log(greetings);

// Conditional Statement
const phone = "091234567899";
const answerMyNumber =
  phone === "081234567899" ||
  phone === "091234567891" ||
  phone === "091234567892"
    ? "Pilih ini"
    : "masukkkan ";

console.log(answerMyNumber);
