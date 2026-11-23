const daftarSiswa = ["Andi", "Budi", "Cita", "Dannie", "Edwin"];
const sapaSemua = daftarSiswa.map ((nama) => {
    return `Selamat Pagi, ${nama}!`;
});

console.log(sapaSemua);