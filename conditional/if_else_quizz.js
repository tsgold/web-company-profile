const rapor = {
    math: 80,
    english: 85,
    physic: 99,
    bahasa: 55,
    computer: 100,
    accounting: 67,
    chemistry: 35
}

// console.log(rapor.computer);

const hasil_akhir = (rapor.math + 
                     rapor.english + 
                     rapor.physic + 
                     rapor.bahasa + 
                     rapor.computer + 
                     rapor.accounting +
                     rapor.chemistry) / 7

const hasil_akhir_pembulatan = Math.round(hasil_akhir);
console.log(hasil_akhir_pembulatan);

/* requirements
jika hasil akhir pembulatan lebih besar&sama dengan95 -----> Selamat! You are the greatest!
jika hasil akhir pembulatan lebih besar&sama dengan 80 dan kurang dari&samadengan 95 -----> Congratulations! Kamu hebat!
jika hasil akhir pembulatan lebih besar&sama dengan 60 dan kurang dari&samadengan 80 -----> Coba lagi!
jika hasil akhir pembulatan lebih besar&sama dengan 40 dan kurang dari&samadengan 60 -----> Kurangi maen game!
selain dari semua di atas ----> Tolong panggil orang tuamu!
 */

 if (hasil_akhir_pembulatan >= 95) {
     console.log("Selamat! You are teh greatest!");
 } else if (hasil_akhir_pembulatan >= 80 && hasil_akhir_pembulatan <= 95) {
     console.log("Congratulation! Kamu hebat!");
 } else if(hasil_akhir_pembulatan >= 60 && hasil_akhir_pembulatan <= 80){
     console.log("Coba lagi!");
 } else if (hasil_akhir_pembulatan >= 40 && hasil_akhir_pembulatan <= 60) {
     console.log("Kurangi maen game!");
 } else {
     console.log("Tolong panggil orangtuamy!");
 }     
 