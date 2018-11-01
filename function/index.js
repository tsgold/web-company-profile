const angka_satu = 8;
const angka_dua = 5;

// buat function - nama function pakai kata kerja -verb
// satu function specific satu pekerjaan atau task
// cara 1
// function penjumlahanAngka(data_satu, data_dua) {
//     const hasil = data_satu + data_dua;
//     return hasil;
// }
// const hasilPenjumlahan = penjumlahanAngka(10, 5);
// console.log(hasilPenjumlahan);

// penjumlahanAngka(10, 5); // passing data -> kirm data ke function

// // cara 2 - ES6 "=>" berfungsi sebagai return

// const penjumlahanAngkaLagi = (data_satu, data_dua) => data_satu + data_dua;
//     console.log(penjumlahanAngkaLagi(25, 5));

const penjumlahan = (data_satu, data_dua) => data_satu + data_dua;
const pengurangan = (data_satu, data_dua) => data_satu - data_dua;
const perkalian = (data_satu, data_dua) => data_satu * data_dua;
const penjumlahanTotal = (data_satu, data_dua, data_tiga) =>
  data_satu + data_dua + data_tiga;

const hasil_penjumlahan = penjumlahan(angka_satu, angka_dua);
const hasil_perkalian = perkalian(hasil_penjumlahan, angka_dua);
const hasil_pengurangan = pengurangan(hasil_perkalian, angka_dua);
const hasil_total = penjumlahanTotal(
  hasil_penjumlahan,
  hasil_perkalian,
  hasil_pengurangan
);
console.log(hasil_penjumlahan);
console.log(hasil_perkalian);
console.log(hasil_pengurangan);
console.log(hasil_total);
