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

const hitungDiskon = (kategori, hargaBarang) => {
  if (kategori === "Food") {
    return hargaBarang * 0.5;
  } else {
    return 0;
  }
};

const hitungOngkir = lokasi => {
  if (lokasi === "Tangerang") {
    return 15000;
  } else if (lokasi === "Jakarta") {
    return 10000;
  } else if (lokasi === "Bandung") {
    return 20000;
  }
};

const hitungBiayaAdmin = () => 2000;

const hitungTotalHarga = (
  amount,
  hitungDiskon,
  hitungOngkir,
  hitungBiayaAdmin
) => {
  return amount - hitungDiskon + hitungOngkir + hitungBiayaAdmin;
};

dataProducts.map((product, idx) => {
  const tarifOngkir = hitungOngkir(product.location);
  const biayaAdmin = hitungBiayaAdmin();
  const diskon = hitungDiskon(product.price);
  const totalHarga = hitungTotalHarga(
    product.price,
    biayaAdmin,
    diskon,
    hasilHarga
);

  console.log(`Nama Product : ${product.name}`);
  console.log(`Total yang harus dibayar Rp. ${totalHarga}`);
  console.log("===========================================");
});
