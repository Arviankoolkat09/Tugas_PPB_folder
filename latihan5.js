
function tampilJudul() {
  return "Aplikasi Data Siswa";
}
const tampilJudulArrow = (siswa) => { 
  return `Selamat datang ke Aplikasi Data Siswa ${siswa}!`; 
};

function tampilKelas(kelas) {
  return 'Saya dari kelas ' + kelas;
}
const tampilKelasArrow = (kelas) => {
  return `Saya dari ${kelas}`;
};

function tambahAngka(a, b) {
  return a + b;
}
const tambahAngkaArrow = (a, b) => {
  return a + b;
};

function cekPassword(pass) {
  if (pass === '11241992') {
    return 'Login Berhasil - Sonic 2 code';
  } else {
    return 'Password Salah';
  }
}
const cekPasswordArrow = (pass) => {
  return pass === '06231991' ? 'Login Berhasil - Sonic 1 code' : 'Password Salah';
};

const data = { nis: '101', alamat: 'Cibinong' };
const { nis, alamat } = data;
console.log(nis, alamat);

console.log(tampilJudul());              
console.log(tampilJudulArrow("Andi"));   

console.log(tampilKelas("XII RPL"));     
console.log(tampilKelasArrow("XII RPL"));

console.log(tambahAngka(5, 4));          
console.log(tambahAngkaArrow(5, 4));     

console.log(cekPassword("11241992"));        
console.log(cekPasswordArrow("06231991"));   
