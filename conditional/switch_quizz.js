const profile = {
  name: "DEF",
  phone: "123456789"
};

/* Switch phone number 
1. 081234567890 ---> Operator yang anda gunakan adalah Telkomsel Simpati
2. 08134567890 ---> Operator yang anda gunakan adalah Telkomsel Halo
3. 08578912345 ---> Operator yang anda gunakan adalah Indosar IM3
4. selain 3 diatas ---> Silahkan masukkkan nomor handphone Anda!
*/

switch (profile) {
  case "081234567890":
    console.log("Operator Anda = Telkomsel Simpati");
    break;

  case "08134567890":
    console.log("Operator Anda = Telkomsel Halo");
    break;

  case "08578912345":
    console.log("Operator Anda = Indosat IM3");
    break;
  default:
    console.log("Silahkan masuukkan nomor HP Anda");
}
