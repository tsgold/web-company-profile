const dataProducts = [
  {
    name: "Red Dead Redemption 2",
    price: "85000",
    category: "RPG",
    rating: "10",
    location: "Jakarta"
  },
  {
    name: "Ghost of Tsushima",
    price: "750000",
    category: "Action",
    rating: "9",
    location: "Bandung"
  },
  {
    name: "Spiderman",
    price: "750000",
    category: "Humor",
    rating: "8",
    location: "Tangerang"
  },
  {
    name: "Shadow of The Tomb Raider",
    price: "680000",
    category: "Adventure",
    rating: "7",
    location: "Batam"
  }
];

// expected result:
// =====================================
// Game Name : Shadow of The Tomb Raider
// Price : Rp. 680000
// Category : Adventure
// Rating : 7
// Ongkos Kirim : Rp. 35000

// Ongkir dari Jakarta = 10000
// Ongkir dari Tangerang = 15000
// Ongkir dari Bandung = 20000
// Ongkir dari Batam = 35000

// Clue / To do list:
// 1. Gunakan looping atau perulangan untuk mengelolah data secara satu per satu
// 2. Didalam looping tersebut gunakan conditional untuk menghitung ongkir

/* data.messages.map((obj, i) => {
    console.log("msgFrom", obj.msgFrom);
    console.log("msgBody", obj.msgBody);
});
 */
/* const entries = Object.entries(dataProducts);
console.log(entries); */

const ongkosKirim = dataProducts.map(daftarGames => {
  console.log(`Game Name: ${daftarGames.name}`);
  console.log(`Price: Rp. ${daftarGames.price}`);
  console.log(`Category: ${daftarGames.category}`);
  console.log(`Rating: ${daftarGames.rating}`);
  if (daftarGames.location === "Jakarta") {
    console.log(`Ongkos Kirim: Rp.10000 `);
  } else if (daftarGames.location === "Tangerang") {
    console.log(`Ongkos Kirim: Rp. 15000`);
  } else if (daftarGames.location === "Bandung") {
    console.log(`Ongkos Kirim: Rp. 20000`);
  } else if (daftarGames.location === "Batam"){
      console.log(`Ongkos Kirim: Rp. 35000`);
  }
    console.log(`========================================`);
});
