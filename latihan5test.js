function tampilJudul() {
  return "Aplikasi Data Siswa";
}
const tampilJudul = (siswa) => { 
  return `Selamat datang ke Aplikasi Data Siswa ${siswa}!`; 
};


function tampilKelas(kelas) {
  return 'Saya dari kelas ' + kelas;
}
const tampilkelas = (kelas) => {
  return `saya dari ${kelas}`;
}
 
function tambahAngka(a, b) {
  return a + b;
}
const tambahAngka = (a, b) => {
  return
}

function cekPassword(pass) {
  if (pass === '1234') {
    return 'Login Berhasil';
  } else {
    return 'Password Salah';
  }
}

const data = { nis: '101', alamat: 'Cibinong' }; //Keluarkan nis dan alamat menggunakan kurung kurawal { ... } lalu tampilkan dengan console.log(nis, alamat)


console.log(tampilJudul("Andi")); 
console.log(tampilJudul());

console.log(tambahAngka(5, 4));