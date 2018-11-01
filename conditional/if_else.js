/* 
import { peopleName, profile } from "../variable";

console.log(peopleName);
console.log(profile); */

// == (hanya value yang sama)
// === (tipe data dan value harus sama)

const peopleName = "ABC";
const age = "35";
const profile = {
    name: "DEF",
    phone: "123456789"
}



if (age === 17){
    console.log("i am 17 years old!");
}else if (age > 17 && age <= 25){
    console.log("Guess my age!");
}else if (age === 35 || age === "35") {
    console.log(".....");  
} else{
    console.log("ABCDEFGHI");
}