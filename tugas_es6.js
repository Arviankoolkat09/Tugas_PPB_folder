const buah = [
  { nama: "Apple", harga: 7500 },
  { nama: "Onion", harga: 2500 },
  { nama: "Orange", harga: 5000 }
];

const dafBuah = buah.map((item) => {
  const statusMewah = item.harga > 2000 ? " - buah (mewah)" : "";
  return `Buah ${item.nama} harganya Rp${item.harga.toLocaleString('id-ID')}${statusMewah}`;
});

dafBuah.forEach((kalimat) => console.log(kalimat));