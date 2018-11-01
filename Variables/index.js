// //keyword - namaVariable
// var namaOrang = "Yogie" //old

// //es6
// const color = "red" //tidak bisa reassign 
// color = "green" // Error

// let brand = "lenovo" // bisa reassign 
// brand = "Acer" // hasilnya Acer

// // variable kosong
// const cars
// let motors 
// motors = ["Honda", "Yamaha"]


// //Data Types
// const peopleName= "Yogie" // String // cleancode nama variable specific
// const peopleAge = 17   // Int atau number
// const isHandsome = true  //Boolen - true or false isHome (pertanyaan)
// const ride = {              // Object -- 1 object punya beberapa property 
//     category: 'motor',
//     brand: 'yamaha',
//     type:'Xmax'
// } // object pakai kurung kurawal
// const numbers = [1, 3, 5, 7]  //Array -- kurung siku -- untuk menyimpan beberapa object di pisah dengan koma 
// // array menyimpan kumpulan data

const cars = [
    {
        category: "mobil",
        brand: "honda",
        type: "crv",
    } 
    // {
    //     category: 'mobil',
    //     brand: 'honda',
    //     type: 'crv'
    // }
]
console.log (`my car is ${cars.category}. i am using ${cars.brand}`);




// Template string
const namaOrang = `Yogie`