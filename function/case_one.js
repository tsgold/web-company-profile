const product = {
  name: "Sepatu Adidas Yeezy",
  price: 1560000,
  category: "Fashion",
  size: 42,
  color: "Black",
  location: "Bandung"
};

const hitungDiskon = hargaBarang => {
  // Diskon 20% All Item
  const hasil = hargaBarang * 0.2;
  return hasil;
};

const hitungOngkir = lokasiPenjual => {
  if (lokasiPenjual === "Bandung") {
    return 25000;
  } else {
    return 100000;
  }
};

const hitungBiayaAdmin = () => 2500;

const hitungHargaTotal = (amount, discount, shippingFee, adminFee) => {
  const hasil = amount - discount + shippingFee + adminFee;
  return hasil;
};

const hasilPerhitunganDiskon = hitungDiskon(product.price);
    console.log(hasilPerhitunganDiskon);
const hasilPerhitunganOngkir = hitungOngkir(product.location );
    console.log(hasilPerhitunganOngkir);
const hasilPerhitunganBiayaAdmin = hitungBiayaAdmin();
    console.log(hasilPerhitunganBiayaAdmin);
const hasilTotal = hitungHargaTotal (
    product.price,
    hasilPerhitunganDiskon,
    hasilPerhitunganOngkir,
    hasilPerhitunganBiayaAdmin
)

console.log(`Harga yang harus ditransfer oleh user sebesar Rp. ${hasilTotal}`);