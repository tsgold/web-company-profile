const dataProducts = [
  {
    name: "Nabati Chocolate Wafer",
    price: 200000,
    category: "Food",
    location: "Bandung"
  },
  {
    name: "Adaptor Macbook Pro",
    price: 850000,
    category: "Electronics",
    location: "Jakarta"
  },
  {
    name: "Batik Shirt",
    price: 399000,
    category: "Fashion",
    location: "Bandung"
  },
  {
    name: "Boardmarker Snowman",
    price: 25000,
    category: "Office",
    location: "Tangerang"
  }
];

// Todo List
// 1. Bikin function untuk hitung diskon (Category Food, discount 50%)
// 2. Bikin function untuk hitung ongkir (Tangerang 15000, Jakarta 10000, Bandung 20000)
// 3. Bikin function untuk hitung biaya admin (2000)
// 4. Bikin function untuk hitung total harga yg harus di bayar user
// 5. Bikin looping/ Perulangan
// 6. Panggil semua function tersebut

// expected result
// Nama Product : Boardmarker Snowman
// Total Harga yang harus dibayar Rp 15000

const hitungDiskon = (hargaBarang, kategori) => 
  kategori === "Food" ? hargaBarang * 0.5 : 0; 


const hitungOngkir = lokasi => {
  if (lokasi === "Tangerang"){
      return 15000;
  }else if (lokasi === "Jakarta") {
      return 10000;
  }else if (lokasi === "Bandung"){
      return 20000;
  }
};

const hitungBiayaAdmin = () => 2000;

const hitungTotalHarga = (harga, diskon, ongkir, admin) => {
   const totalHarga = harga - diskon + ongkir + admin;
   return totalHarga;
};

dataProducts.map((produk, id) => {
  const harga = produk.price;
  const diskon = hitungDiskon(produk.price, produk.category); 
  const ongkir = hitungOngkir(produk.location);
  const admin = hitungBiayaAdmin();
  const totalHarga = hitungTotalHarga (harga, diskon, ongkir, admin); 

  console.log("============================");
  console.log(`Nama Produk : ${produk.name}`);
  console.log(`Total yang harus harus di bayar : Rp. ${totalHarga}.-`);
});


// cara 1
// const hitungDiskon = (hargaBarang, kategoriBarang) => {
//   let hasil = 0;
//   if (kategoriBarang === "Food") {
//     hasil = hargaBarang * 0.5;
//     return hasil;
//   } else {
//     return hasil;
//   }
// };

// const hitungOngkir = lokasiPenjual => {
//   if (lokasiPenjual === "Bandung") {
//     return 20000;
//   } else if (lokasiPenjual === "Tangerang") {
//     return 15000;
//   } else {
//     return 10000;
//   }
// };

// const hitungBiayaAdmin = () => 2000;

// const hitungHargaTotal = (amount, discount, shippingFee, adminFee) => {
//   const hasil = amount - discount + shippingFee + adminFee;
//   return hasil;
// };

// for (i = 0; i < dataProducts.length; i++) {
//   let namaProduk = dataProducts[i].name;
//   let hargaProduk = dataProducts[i].price;
//   let kategoriProduk = dataProducts[i].category;
//   let lokasiProduk = dataProducts[i].location;

//   let diskonProduk = hitungDiskon(hargaProduk, kategoriProduk);
//   let ongkirProduk = hitungOngkir(lokasiProduk);
//   let biayaAdminProduk = hitungBiayaAdmin();

//   let totalPembayaran = hitungHargaTotal(
//     hargaProduk,
//     diskonProduk,
//     ongkirProduk,
//     biayaAdminProduk
//   );

//   console.log(`Nama Produk: ${namaProduk}`)
//   console.log(`Total Harga yang harus dibayar Rp. ${totalPembayaran} ,-`)
//   console.log(`\n`)
// }

// cara 2
// const countDiscount = (price, category) =>
//   category === "Food" ? price * 0.5 : 0;
// const countShippingFee = location => {
//   let fee = 0;
//   if (location == "Jakarta") {
//     fee = 10000;
//   } else if (location == "Tangerang") {
//     fee = 15000;
//   } else {
//     fee = 20000;
//   }
//   return fee;
// };
// const countAdminFee = () => 2000;
// const countTotalPrice = (price, discount, shippingFee, adminFee) => {
//   const totalPrice = price - discount + shippingFee + adminFee;
//   return totalPrice;
// };

// dataProducts.map((product, id) => {
//   const price = product.price;
//   const discount = countDiscount(product.price, product.category);
//   const shippingFee = countShippingFee(product.location);
//   const adminFee = countAdminFee();
//   const totalPrice = countTotalPrice(price, discount, shippingFee, adminFee);
//   console.log(`=======================================`);
//   console.log(`Nama Product : ${product.name}`);
//   console.log(`Total Harga yang harus dibayar : Rp. ${totalPrice},-`);
// });